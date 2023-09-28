// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import fs from "fs";

Mkdir("./DATA");
Mkdir("./DATA/habits");

const monthNames = [
  ["January", 31],
  ["February", 28],
  ["March", 31],
  ["April", 30],
  ["May", 31],
  ["June", 30],
  ["July", 31],
  ["August", 31],
  ["September", 30],
  ["October", 31],
  ["November", 30],
  ["December", 31],
];

// ----------
const year: any = {};
monthNames.forEach((month) => {
  year[month[0]] = {};
  for (let i = 0; i < +month[1]; i++) {
    year[month[0]][i] = false;
  }
});
// ----------

function createFile(pathFileName: string) {
  fs.writeFile(pathFileName, JSON.stringify(year), function (err) {
    if (err) throw err;
    console.log("File is created successfully, at" + pathFileName);
  });
}

function Mkdir(path: string) {
  fs.access(path, (error) => {
    if (error) {
      fs.mkdir(path, (error) => {
        if (error) {
          console.log(error);
        }
      });
    }
  });
}

// ----------------------------------- //
import HabitBtn from "./components/Sidebar/HabitBtn";
import HabitBtnFunc from "./components/Sidebar/HabitBtnFunc";

window.addEventListener("DOMContentLoaded", () => {
  const [
    addNewHabitBtn,
    input,
    inputContainer,
    inputSaveBtn,
    sidebarHabitsContainer,
  ] = [
    document.querySelector("#add-new-habit-btn"),
    document.querySelector("section#add-calendar-input input"),
    document.querySelector("section#add-calendar-input"),
    document.querySelector("button#add-new-calendar-save-btn"),
    document.querySelector("div#sidebar-habits-container"),
  ];

  addNewHabitBtn.addEventListener("click", () => {
    inputContainer.classList.remove("hidden");
  });

  let TotalHabitNums = 1;
  inputSaveBtn.addEventListener("click", () => {
    sidebarHabitsContainer.innerHTML += HabitBtn(TotalHabitNums, input.value);

    inputContainer.classList.add("hidden");
    createFile(`./DATA/habits/habit_${input.value}.json`);

    input.value = "";
    TotalHabitNums++;
    HabitBtnFunc();
  });

  // --------------

  addHabitsToSidebarJSON();
  CalendarDaysJSON();
  habitFileToCalender();
});

// -------------------- Get Files Names From DATA then add them to Sidebar

function addHabitsToSidebarJSON() {
  const fileNames = fs.readdirSync("./DATA/habits");
  const sidebarHabitsContainer = document.querySelector(
    "div#sidebar-habits-container"
  );
  fileNames.map((fileName, i) => {
    sidebarHabitsContainer.innerHTML += HabitBtn(i + 1, fileName);
  });
  HabitBtnFunc();
}

// -------------------- Edit Json file | Mark Unmark calender days

function editCalenderFileJSON(
  filePath: string,
  month: string,
  day: string,
  value: boolean
) {
  fs.readFile(`./DATA/habits/${filePath}`, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const jsonData = JSON.parse(data);

    jsonData[month][day] = value;

    fs.writeFile(
      `./DATA/habits/${filePath}`,
      JSON.stringify(jsonData),
      function (err) {
        if (err) throw err;
        console.log("File is edited successfully.");
      }
    );
  });
}

function CalendarDaysJSON() {
  document.querySelectorAll("button.hex").forEach((btn) => {
    btn.addEventListener("click", () => {
      const [month, day] = btn.getAttribute("id").split("-");
      const calendarTile = document.querySelector(
        "#title-bar-calendar-title"
      ).textContent;

      console.log(month, day);
      console.log(calendarTile);

      editCalenderFileJSON(calendarTile, month, day, true);
    });
  });
}

// ------------------------------- Read habit.json => Calender

function habitFileToCalender() {
  document.querySelectorAll("div.sidebar-habit").forEach((btn) => {
    btn.addEventListener("click", () => {
      // -- Unmark All Days
      unMarkAllCalender();
      const title = btn.querySelector("span.cal-title").textContent;

      fs.readFile(`./DATA/habits/${title}`, "utf-8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        const jsonData = JSON.parse(data);

        for (const key in jsonData) {
          for (const key2 in jsonData[key]) {
            // console.log(key);
            // console.log(key2);
            // console.log(jsonData[key][key2]);
            if (jsonData[key][key2]) {
              markDay(`${key}-${key2}`);
            }
          }
        }
      });
    });
  });
}

function markDay(dayId: string) {
  const day = document.querySelector(`#${dayId} button`);
  day.classList.replace("opacity-50", "brightness-105");
  day.classList.replace("grayscale-[35%]", "marked");
  day
    .querySelector(" div > div > div > div > span")
    .classList.add("brightness-0");
}

function unMarkAllCalender() {
  document.querySelectorAll("button.hex").forEach((btn) => {
    if (btn.classList.contains("brightness-105")) {
      btn.classList.add("opacity-50");
      btn.classList.add("grayscale-[35%]");
      btn.classList.remove("brightness-105");

      btn.classList.remove("marked");

      btn
        .querySelector(" div > div > div > div > span")
        .classList.remove("brightness-0");
    }
  });
}
