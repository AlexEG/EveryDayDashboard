// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import fs from "fs";
import HabitBtn from "./components/Sidebar/HabitBtn";
import HabitBtnFuncChangeTitle from "./components/Sidebar/HabitBtnFunc";
import ChangeTitle from "./components/TitleBar/ChangeTitle";
import TogglRightClickMenu from "./components/Sidebar/right-click-menu/TogglRightClickMenu";

Mkdir("./DATA");
Mkdir("./DATA/habits");
Mkdir("./DATA/Settings");

window.addEventListener("DOMContentLoaded", () => {
  // addHabitsToSidebarJSON();
  // addNewHabitInput();
  // CalendarDaysJSON();
  // habitFileToCalender();
  // openTheFirstHabitOnLoad();
  // TogglRightClickMenu();
  // ---- Sidebar Right Click menu
  // sidebarDeleteHabitBtn();
  // sidebarRenameHabit();
  // sidebarChangeHabitOrder();
  readBirthdayFile();
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
      console.error(`There is already exciting File with the Name ${FileName}`);
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
    (err) => {
      if (err) console.error(err);
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
// function addHabitsToSidebarJSON() {
//   const fileNames = fs
//     .readdirSync("./DATA/habits")
//     .sort((a, b) => +a.split("_").slice(1, 2) - +b.split("_").slice(1, 2));

//   fileNames.map((habitName) => {
//     createHabitBtn(habitName);
//   });
//   HabitBtnFuncChangeTitle();
// }

// /**
//  *
//  * ! createHabitBtn
//  * used in => addHabitsToSidebarJSON() && createJSONHaFileHabit()
//  * after creating JSON file render habitbtn in Sidebar
//  * Done
//  *
//  */
// function createHabitBtn(habitName: string) {
//   const sidebarHabitsContainer = document.querySelector(
//     "div#sidebar-habits-container"
//   );
//   const habitNum = +habitName.split("_")[1];
//   const habitTitle = habitName.split("_").slice(2).join(" ").slice(0, -5);
//   sidebarHabitsContainer.innerHTML += HabitBtn(habitNum, habitTitle, habitName);
// }

/**
 *
 * ! addNewHabitInput
 * Done
 *
 */
// function addNewHabitInput() {
//   const [addNewHabitBtn, input, inputContainer, inputSaveBtn, ,] = [
//     document.querySelector("#add-new-habit-btn"),
//     document.querySelector("section#add-calendar-input input"),
//     document.querySelector("section#add-calendar-input"),
//     document.querySelector("button#add-new-calendar-save-btn"),
//   ];

//   addNewHabitBtn.addEventListener("click", () => {
//     inputContainer.classList.remove("hidden");
//   });

//   inputSaveBtn.addEventListener("click", () => {
//     inputContainer.classList.add("hidden");

//     createJSONHaFileHabit(input.value.trim());
//     input.value = "";
//   });
// }

/**
 *
 * !CalendarDaysJSON
 * Edit Json file | Mark Unmark calender days
 * Done
 *
 */
// function CalendarDaysJSON() {
//   document.querySelectorAll("button.hex").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const [month, day] = btn.getAttribute("id").split("-");
//       const fileName = document
//         .querySelector("#title-bar-calendar-title")
//         .getAttribute("data-file-path");

//       editCalenderFileJSON(fileName, month, day, true);
//     });
//   });
// }

/**
 *
 * ! editCalenderFileJSON
 * Done
 *
 */
function editCalenderFileJSON(fileName: string, month: string, day: string) {
  fs.readFile(`./DATA/habits/${fileName}.json`, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const jsonData = JSON.parse(data);

    jsonData[month][day] = !jsonData[month][day];

    fs.writeFile(
      `./DATA/habits/${fileName}.json`,
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
// function habitFileToCalender() {
//   document.querySelectorAll("div.sidebar-habit").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       // -- Unmark All Days
//       unMarkAllCalender();
//       const filePath = btn.getAttribute("data-file-path");

//       fs.readFile(`./DATA/habits/${filePath}`, "utf-8", (err, data) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
//         const jsonData = JSON.parse(data);

//         for (const key in jsonData) {
//           for (const key2 in jsonData[key]) {
//             if (jsonData[key][key2]) {
//               markDay(`${key}-${key2}`);
//             }
//           }
//         }
//       });
//     });
//   });
// }

/**
 *
 * ! markDay
 * Done
 *
 */
// function markDay(dayId: string) {
//   const day = document.querySelector(`#${dayId} button`);
//   day.classList.replace("opacity-50", "brightness-105");
//   day.classList.replace("grayscale-[35%]", "marked");
//   day
//     .querySelector(" div > div > div > div > span")
//     .classList.add("brightness-0");
// }

/**
 *
 * ! unMarkAllCalender
 * Done
 *
 */
// function unMarkAllCalender() {
//   document.querySelectorAll("button.hex").forEach((btn) => {
//     if (btn.classList.contains("brightness-105")) {
//       btn.classList.add("opacity-50", "grayscale-[35%]");
//       btn.classList.remove("brightness-105", "marked");

//       btn
//         .querySelector(" div > div > div > div > span")
//         .classList.remove("brightness-0");
//     }
//   });
// }

/**
 *
 * ! openTheFirstHabitOnLoad
 * Open the fitst habit
 * Done
 *
 */
// function openTheFirstHabitOnLoad() {
//   if (fs.readdirSync("./DATA/habits").length > 0) {
//     const FilePath = fs.readdirSync("./DATA/habits")[0];
//     const Title = FilePath.split("_").slice(2).join(" ").slice(0, -5);
//     ChangeTitle(Title, FilePath);

//     const firstHabt = document.querySelector("div.sidebar-habit");
//     firstHabt
//       .querySelector("span")
//       .classList.add("text-slate-950", "font-bold");
//     firstHabt.classList.replace("bg-slate-950", "bg-slate-200");

//     fs.readFile(`./DATA/habits/${FilePath}`, "utf-8", (err, data) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       const jsonData = JSON.parse(data);
//       for (const key in jsonData) {
//         for (const key2 in jsonData[key]) {
//           if (jsonData[key][key2]) {
//             markDay(`${key}-${key2}`);
//           }
//         }
//       }
//     });
//   }
// }

/**
 * ? Habit Sidebar  Edit Title/Order DELETE
 */

/**
 * ! sidebarDeleteHabitBtn
 * TODO bug after deleting file
 */
// function sidebarDeleteHabitBtn() {
//   document.querySelectorAll("button.sidebar-delete-habit").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const JsonFileName = btn
//         .closest("div.sidebar-habit")
//         .getAttribute("data-file-path");

//       const FilePath = `./DATA/habits/${JsonFileName}`;

//       fs.unlink(FilePath, (err) => {
//         if (err) {
//           throw err;
//         }
//         console.log("Delete File successfully.");
//       });
//     });
//   });
// }

/**
 *
 * ! sidebarRenameHabit
 *
 */
// function sidebarRenameHabit() {
//   document
//     .querySelectorAll("button.sidebar-rename-habit-save-btn")
//     .forEach((btn) => {
//       btn.addEventListener("click", () => {
//         const JsonFileName = btn
//           .closest("div.sidebar-habit")
//           .getAttribute("data-file-path");

//         const renameInputValue =
//           btn.parentElement.parentElement.querySelector("input").value;

//         const oldFilePaht = `./DATA/habits/${JsonFileName}`;

//         const habitNum = JsonFileName.split("_")[1];
//         const newFileName = renameInputValue.split(" ").join("_");
//         const newFilePaht = `./DATA/habits/habit_${habitNum}_${newFileName}.json`;

//         // ---
//         fs.rename(oldFilePaht, newFilePaht, (err) => {
//           if (err) {
//             throw err;
//           }
//         });
//         // console.log(habitNum);
//         // console.log(JsonFileName, renameInputValue);
//       });
//     });
// }

/**
 *
 * ! Habits Order in Sidebar
 *
 * TODO
 * 1- make the select btn have options of the number of habits in sidebar
 * 2- give each habit btn seleced in options based on the num of habit
 * 3- when change the order from 3 -> 7 also change 7 -> 3
 * 4- save all that when click on SAVE btn
 */

// function sidebarChangeHabitOrder() {
//   addOptionsToSelect();

//   document
//     .querySelectorAll("select.sidebar-change-order")
//     .forEach((selectBtn) => {
//       selectBtn.addEventListener("change", () => {
//         selectBtn.setAttribute("value", selectBtn.value);
//       });
//     });
// }

// Render options in Select element in each habit btn
// function addOptionsToSelect() {
//   const numberOfHabits = fs.readdirSync("./DATA/habits").length;

//   document.querySelectorAll("select.sidebar-change-order").forEach((select) => {
//     const habitNum = select
//       .closest("div.sidebar-habit")
//       .getAttribute("data-file-path")
//       .split("_")[1];

//     for (let i = 1; i <= numberOfHabits; i++) {
//       if (i === +habitNum) {
//         select.innerHTML += `<option value="${i}" selected>${i}</option>`;
//       } else {
//         select.innerHTML += `<option value="${i}">${i}</option>`;
//       }
//       select.setAttribute("value", habitNum);
//     }
//   });
// }

// ------------------------------------------------

import { contextBridge } from "electron";

// let value = await getJSONFileData("habit_6_bbbbbb");

contextBridge.exposeInMainWorld("HabitsData", {
  getFilesTitles: () => fs.readdirSync("./DATA/habits"),
  createJSONHaFileHabit: (FileName: string) => createJSONHaFileHabit(FileName),
  getJSONFileData: (filePath: string) =>
    fs.readFileSync(`./DATA/habits/${filePath}.json`, "utf8"),
  editCalenderFileJSON: (
    fileName: string,
    month: string,
    day: string,
    value: boolean
  ) => editCalenderFileJSON(fileName, month, day, value),
});

// --------
// TitleBar get birthday from ./settings/birthday.json
import HowOldAmI from "./components/TitleBar/HowOldAmI";

function readBirthdayFile() {
  fs.readFile(`./DATA/settings/titlebar.json`, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const birthday = JSON.parse(data)["birthday"];
    HowOldAmI(birthday[0], birthday[1], birthday[2]);
  });
}

// -----
