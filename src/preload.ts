// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import fs from "fs";
import HabitBtn from "./components/Sidebar/HabitBtn";
import HabitBtnFuncChangeTitle from "./components/Sidebar/HabitBtnFunc";
import ChangeTitle from "./components/TitleBar/ChangeTitle";

Mkdir("./DATA");
Mkdir("./DATA/habits");

window.addEventListener("DOMContentLoaded", () => {
  addHabitsToSidebarJSON();

  addNewHabitInput();

  CalendarDaysJSON();
  habitFileToCalender();
  openTheFirstHabitOnLoad();
});

// _________________________________________________________ //

/**
 *
 * ! emptyDataHabit
 * return object w/ all days default to false
 * Done
 *
 */
function emptyDataHabit() {
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

  const year: any = {};
  monthNames.forEach((month) => {
    year[month[0]] = {};
    for (let i = 1; i <= +month[1]; i++) {
      year[month[0]][i] = false;
    }
  });
  return year;
}

/**
 *
 * ! createJSONHaFileHabit
 * create new json file w/ the emptyDataHabit() contnet
 * Done
 *
 */
function createJSONHaFileHabit(FileName: string) {
  const habitsFiles = fs.readdirSync("./DATA/habits");
  //* checkIfTheNameAvailable
  habitsFiles.map((excitingFile) => {
    const fileTitle = excitingFile.split("_").slice(2).join(" ").slice(0, -5);
    if (FileName === fileTitle) {
      console.error(`There is already excitingFile with the Name ${FileName}`);
      return;
    }
  });
  //* get the next number for habit file
  const excitingFilesNumbersArr = habitsFiles.map(
    (file) =>
      +file
        .split("_")
        .slice(1, 2)
        .sort((a, b) => +a - +b)
  );
  const bigestHabitNum =
    excitingFilesNumbersArr[excitingFilesNumbersArr.length - 1];
  let availableFileNumber = 0;
  for (let i = 1; i <= bigestHabitNum; i++) {
    if (!excitingFilesNumbersArr.includes(i) && availableFileNumber === 0) {
      availableFileNumber = i;
    }
  }
  if (availableFileNumber === 0) {
    availableFileNumber = habitsFiles.length + 1;
  }
  FileName = FileName.split(" ").join("_");
  fs.writeFile(
    `./DATA/habits/habit_${availableFileNumber}_${FileName}.json`,
    JSON.stringify(emptyDataHabit()),
    function (err) {
      createHabitBtn(`habit_${availableFileNumber}_${FileName}.json`);
      HabitBtnFuncChangeTitle();
      if (err) {
        console.error(err);
        return;
      }
    }
  );
}

/**
 *
 * ! Mkdir
 * Done
 *
 */
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

/**
 *
 * ! To Readner Habits in Sidebar
 * Done
 *
 */
function addHabitsToSidebarJSON() {
  const fileNames = fs.readdirSync("./DATA/habits");

  fileNames.map((habitName) => {
    createHabitBtn(habitName);
  });
  HabitBtnFuncChangeTitle();
}

/**
 *
 * ! createHabitBtn
 * used in => addHabitsToSidebarJSON() && createJSONHaFileHabit()
 * after creating JSON file render habitbtn in Sidebar
 * Done
 *
 */
function createHabitBtn(habitName: string) {
  const sidebarHabitsContainer = document.querySelector(
    "div#sidebar-habits-container"
  );
  const habitNum = +habitName.split("_")[1];
  const habitTitle = habitName.split("_").slice(2).join(" ").slice(0, -5);
  sidebarHabitsContainer.innerHTML += HabitBtn(habitNum, habitTitle, habitName);
}

/**
 *
 * ! addNewHabitInput
 * Done
 *
 */
function addNewHabitInput() {
  const [addNewHabitBtn, input, inputContainer, inputSaveBtn, ,] = [
    document.querySelector("#add-new-habit-btn"),
    document.querySelector("section#add-calendar-input input"),
    document.querySelector("section#add-calendar-input"),
    document.querySelector("button#add-new-calendar-save-btn"),
  ];

  addNewHabitBtn.addEventListener("click", () => {
    inputContainer.classList.remove("hidden");
  });

  inputSaveBtn.addEventListener("click", () => {
    inputContainer.classList.add("hidden");

    createJSONHaFileHabit(input.value);
    input.value = "";

    HabitBtnFuncChangeTitle();
  });
}

/**
 *
 * !CalendarDaysJSON
 * Edit Json file | Mark Unmark calender days
 * Done
 *
 */
function CalendarDaysJSON() {
  document.querySelectorAll("button.hex").forEach((btn) => {
    btn.addEventListener("click", () => {
      const [month, day] = btn.getAttribute("id").split("-");
      const fileName = document
        .querySelector("#title-bar-calendar-title")
        .getAttribute("data-file-path");

      editCalenderFileJSON(fileName, month, day, true);

      // console.log(month, day);
      // console.log(fileName);
    });
  });
}

/**
 *
 * ! editCalenderFileJSON
 * Done
 *
 */
function editCalenderFileJSON(
  fileName: string,
  month: string,
  day: string,
  value: boolean
) {
  fs.readFile(`./DATA/habits/${fileName}`, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const jsonData = JSON.parse(data);

    jsonData[month][day] = value;

    fs.writeFile(
      `./DATA/habits/${fileName}`,
      JSON.stringify(jsonData),
      function (err) {
        if (err) throw err;
      }
    );
  });
}

/**
 *
 * ! habitFileToCalender
 * Read habit.json => Calender
 * Done
 *
 */
function habitFileToCalender() {
  document.querySelectorAll("div.sidebar-habit").forEach((btn) => {
    btn.addEventListener("click", () => {
      // -- Unmark All Days
      unMarkAllCalender();
      const filePath = btn.getAttribute("data-file-path");

      fs.readFile(`./DATA/habits/${filePath}`, "utf-8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        const jsonData = JSON.parse(data);

        for (const key in jsonData) {
          for (const key2 in jsonData[key]) {
            if (jsonData[key][key2]) {
              markDay(`${key}-${key2}`);
            }
          }
        }
      });
    });
  });
}

/**
 *
 * ! markDay
 * Done
 *
 */
function markDay(dayId: string) {
  const day = document.querySelector(`#${dayId} button`);
  day.classList.replace("opacity-50", "brightness-105");
  day.classList.replace("grayscale-[35%]", "marked");
  day
    .querySelector(" div > div > div > div > span")
    .classList.add("brightness-0");
}

/**
 *
 * ! unMarkAllCalender
 * Done
 *
 */
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

/**
 *
 * ! openTheFirstHabitOnLoad
 * Open the fitst habit
 * Done
 *
 */
function openTheFirstHabitOnLoad() {
  const FilePath = fs.readdirSync("./DATA/habits")[0];
  const Title = FilePath.split("_").slice(2).join(" ").slice(0, -5);

  ChangeTitle(Title, FilePath);

  fs.readFile(`./DATA/habits/${FilePath}`, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const jsonData = JSON.parse(data);

    for (const key in jsonData) {
      for (const key2 in jsonData[key]) {
        if (jsonData[key][key2]) {
          markDay(`${key}-${key2}`);
        }
      }
    }
  });
}
