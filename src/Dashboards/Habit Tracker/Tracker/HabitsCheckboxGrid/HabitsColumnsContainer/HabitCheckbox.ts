import HTML from "../../../../../components/HTML/HTML";

export default function HabitCheckbox(
  highlightToday: boolean,
  isChecked_time: string,
  habitName: string,
  dayNum: number,
  habitGroupColor: string,
  autoLockAfterTime: string
) {
  const highlight =
    highlightToday &&
    "border-y  relative after:absolute after:top-0 after:-right-0.5 after:bottom-0 after:w-0.5 after:bg-black ";
  const styles =
    "w-10 h-10 flex justify-center items-center border-y-blue-600 bg-black relative " +
    highlight;

  const cell = HTML("div", styles);
  cell.dataset.dayNum = String(dayNum);

  const highlightTodayCSS = highlightToday ? "opacity-100" : "opacity-50";
  const styles2 =
    "relative accent-blue-600 w-5 h-5 cursor-pointer after:content-[attr(customtitle)] after:absolute after:-top-2 after:left-1/2 after:text-blue-200 after:z-50 after:bg-black after:px-2 after:py-0.5 after:-translate-y-full after:-translate-x-1/2 after:whitespace-nowrap after:invisible hover:after:visible after:rounded-sm " +
    highlightTodayCSS;

  // AutoLockAfterTime START
  // 1. don't lock the ckeckbox if
  //    a. the habit is already checked
  //    b. today's TODO
  //    c. if the autoLockAfterTime is not reach yet
  // 2. get the autoLockAfterTime from habit Column data-auto-lock-after-time
  // 3. get Date Now and check if timeNow > autoLockAfterTime
  //    a. if hourNow > hourLock => lock
  //    b. if hourNow === hourLock but minutesNow > minutesLock => lock
  //// 4. run function that check evey five minutes [3] is ture or false
  ////    a. if ture lock the ckeckbox
  ////    b. do nothing
  // 5. better than [4] run a function that take the endTime (autoLockAfterTime) and auto Lock the ckeckbox after that time

  if (!isChecked_time && highlightToday && autoLockAfterTime) {
    const timeNow = Date().match(/\d{2}(?=:)/g); // ['02', '00']
    const lockTime = autoLockAfterTime.split(":"); // ['01', '50']

    const lockCheckbox = () => {
      const styles3 =
        "absolute top-0 left-0 bottom-0 right-0 bg-black/50 p-3 z-50 cursor-not-allowed";
      const lockDiv = HTML("div", styles3);
      const lockImg = HTML("img", "", "", "", {
        src: "/src/assets/lock-closed.svg",
      });

      lockDiv.append(lockImg);
      cell.append(lockDiv);
    };

    if (
      +timeNow[0] > +lockTime[0] ||
      (+timeNow[0] === +lockTime[0] && +timeNow[1] > +lockTime[1])
    ) {
      lockCheckbox();
    } else {
      // run function to autoLock ckeckedbox after timeNow - autoLockAfterTime
      const timeUntilAutoLock =
        ((+lockTime[0] - +timeNow[0]) * 60 * 60 +
          (+lockTime[1] - +timeNow[1]) * 60) *
        1000;

      // console.log("timeUntilAutoLock", timeUntilAutoLock);

      setTimeout(() => {
        lockCheckbox();
        console.log(
          "%c AutoLock This Haibt cuz You're lazy ",
          "background:#000;color:#f00;font-weight:900"
        );
      }, timeUntilAutoLock);
    }

    // console.log("autoLockAfterTime", autoLockAfterTime);
    // console.log("timeNow", timeNow);
    // console.log("lockTime", lockTime);
    // console.log("+lockTime[0]", +lockTime[0]);
  }
  // AutoLockAfterTime END

  const checkbox = HTML("input", styles2, "", "", {
    type: "checkbox",
    customtitle: habitName,
  });

  checkbox.style.accentColor = habitGroupColor;
  if (isChecked_time) {
    checkbox.setAttribute("checked", "");
    cell.dataset.checkedTime = isChecked_time;
  }

  cell.append(checkbox);

  checkbox.onclick = () => {
    // Lock the history of habit checkbox
    // 1. add data-edit-habit-history: 'false'  to the HaibtCheckboxGrid by default
    // 2. add a toggle button to the header "Unlock Edit History"
    //    2a. when "on" change data-edit-habit-history => true
    // 3. for the checkboxes add condition if data-edit-habit-history is false and
    //    dayNum is less then today don't run any of the code below

    if (
      checkbox.parentElement.parentElement.parentElement.dataset
        .editHabitHistory === "false" &&
      !highlightToday
    )
      return;
    // ---- ---- //
    // 1. get habit file name, year, month, day
    // 2. if not checked before
    // 3. add new property to filename -> data -> year -> month -> day w/ the time of click
    // 4. if checked delete property
    // 5. get metadata, data
    // 6. edit data
    // 7. save metadata + data then write to json

    // ---- ---- //

    // 1. habit file name
    const habitName = cell.parentElement.dataset.habitName;
    const habitNum = cell.parentElement.dataset.habitNum;
    const habitFileName = `dashboards/habit-tracker/habit_${habitNum}_${habitName.replace(
      /\s+/g,
      "_"
    )}`;
    // console.log(habitFileName);

    // 1. year, month, day
    const day = cell.dataset.dayNum;
    const month = cell.parentElement.parentElement.dataset.month;
    const year = cell.parentElement.parentElement.dataset.year;
    // console.log(year, month, day);

    const thisHabitDATA = new Promise((res, rej) => {
      res(JSON.parse(window.DATA.getJSONFileData(habitFileName)));
    });

    thisHabitDATA.then((data) => {
      // console.log(data);
      // const metadata = data["data"]["metadata"];
      const habitData = data["data"]["habitData"];
      // console.log("metadata: ", metadata);
      // console.log("habitData: ", habitData);

      if (checkbox.hasAttribute("checked")) {
        // 2. remove checked + the day from json
        checkbox.removeAttribute("checked");
        cell.removeAttribute("data-checked-time");
        // console.log("checked before");

        delete habitData[year][month][day];
      } else {
        // 3. add checked attribute + the day to json
        checkbox.setAttribute("checked", "");
        // console.log("checked Now");

        const time = Date()
          .match(/\d{2}:\d{2}:\d{2}/g)
          .toString();

        // add new data to  year: { month: {day:[]} }

        habitData[year] = { ...habitData[year] };
        habitData[year][month] = { ...habitData[year][month] };

        habitData[year][month][day] = time;
      }
      // 7.
      // console.log(data);
      window.DATA.editSettingsJSONFile_Value(
        habitFileName,
        "data",
        data["data"]
      );
    });
    //--- change the DailyProgressColumn text ---//

    const DailyProgressColumn =
      cell.parentElement.parentElement.parentElement.lastElementChild;
    const thisDay = DailyProgressColumn.children[+day];

    const span1 = thisDay.firstElementChild
      .firstElementChild as HTMLSpanElement; // 10/21
    const span2 = thisDay.firstElementChild.lastElementChild as HTMLSpanElement; // 48%

    const [howManyCheckedInThisDay, numOfHabits] = span1.innerHTML.split("/");

    // check if it - or +  then add the new values to span1 span2
    let newPercentage = 0;
    let newHowManyCheckedInThisDay = +howManyCheckedInThisDay;

    if (checkbox.hasAttribute("checked")) {
      newPercentage = Math.round(
        ((+howManyCheckedInThisDay - 1) / +numOfHabits) * 100
      );
      newHowManyCheckedInThisDay--;
    } else {
      newPercentage = Math.round(
        ((+howManyCheckedInThisDay + 1) / +numOfHabits) * 100
      );
      newHowManyCheckedInThisDay++;
    }

    span1.innerText = `${newHowManyCheckedInThisDay}/${numOfHabits}`;
    span2.innerText = `${newPercentage}%`;

    // add the progressStyles
    const progressStyles =
      newPercentage <= 25
        ? "text-red-500"
        : newPercentage <= 75
        ? "text-yellow-500"
        : "text-green-500";

    thisDay.classList.remove(
      "text-red-500",
      "text-yellow-500",
      "text-green-500"
    );
    thisDay.classList.add(progressStyles);

    //?  console.log  ?//
    // console.log("DailyProgressColumn", DailyProgressColumn);
    // console.log("thisDay", thisDay);
    // console.log("span1", span1);
    // console.log("span2", span2);
    // console.log("howManyCheckedInThisDay", howManyCheckedInThisDay);
    // console.log("numOfHabits", numOfHabits);
    // console.log("newPercentage", newPercentage);
    // console.log("newHowManyCheckedInThisDay", newHowManyCheckedInThisDay);

    checkbox.hasAttribute("checked")
      ? console.log(
          `%c Uncheck %c ${habitName} %c ${month} ${day}, ${year} `,
          "background:black; color:#f00; font-weight:900",
          "background:black; color:#ffd269",
          "background:black; color:white"
        )
      : console.log(
          `%c Check %c ${habitName} %c ${month} ${day}, ${year} `,
          "background:black; color:#0f0; font-weight:900",
          "background:black; color:#ffd269",
          "background:black; color:white"
        );
    // } // editHabitHistory if() END
  }; // onclick end

  return cell;
}
