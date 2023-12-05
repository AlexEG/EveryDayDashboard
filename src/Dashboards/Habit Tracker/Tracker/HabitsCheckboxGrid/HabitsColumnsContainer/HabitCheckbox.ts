import HTML from "../../../../../components/HTML/HTML";

export default function HabitCheckbox(
  highlightToday: boolean,
  isChecked_time: string,
  habitName: string,
  dayNum: number,
  habitGroupColor: string
) {
  const highlight =
    highlightToday &&
    "border-y  relative after:absolute after:top-0 after:-right-0.5 after:bottom-0 after:w-0.5 after:bg-black ";
  const styles =
    "w-10 h-10 flex justify-center items-center border-y-blue-600 bg-black " +
    highlight;

  const cell = HTML("div", styles);
  cell.dataset.dayNum = String(dayNum);

  const highlightTodayCSS = highlightToday ? "opacity-100" : "opacity-50";
  const styles2 =
    "relative accent-blue-600 w-5 h-5 cursor-pointer after:content-[attr(customtitle)] after:absolute after:-top-2 after:left-1/2 after:text-blue-200 after:z-50 after:bg-black after:px-2 after:py-0.5 after:-translate-y-full after:-translate-x-1/2 after:whitespace-nowrap after:invisible hover:after:visible after:rounded-sm " +
    highlightTodayCSS;

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
    console.log(habitFileName);

    // 1. year, month, day
    const day = cell.dataset.dayNum;
    const month = cell.parentElement.parentElement.dataset.month;
    const year = cell.parentElement.parentElement.dataset.year;
    console.log(year, month, day);

    const habitDATA = new Promise((res, rej) => {
      res(JSON.parse(window.DATA.getJSONFileData(habitFileName)));
    });

    habitDATA.then((data) => {
      console.log(data);
      const metadata = data["data"]["metadata"];
      const habitData = data["data"]["habitData"];
      console.log("metadata: ", metadata);
      console.log("habitData: ", habitData);

      if (checkbox.hasAttribute("checked")) {
        // 2. remove checked + the day from json
        checkbox.removeAttribute("checked");
        cell.removeAttribute("data-checked-time");
        console.log("checked before");

        delete habitData[year][month][day];
      } else {
        // 3. add checked attribute + the day to json
        checkbox.setAttribute("checked", "");
        console.log("checked Now");

        habitData[year][month][day] = Date()
          .match(/\d{2}:\d{2}:\d{2}/g)
          .toString();
      }

      // 7.
      console.log(data);
      window.DATA.editSettingsJSONFile_Value(
        habitFileName,
        "data",
        data["data"]
      );
    });
  }; // onclick end

  return cell;
}
