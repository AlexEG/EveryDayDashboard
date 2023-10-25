// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import fs from "fs";

Mkdir("./DATA");
Mkdir("./DATA/habits");
Mkdir("./DATA/Settings");

window.addEventListener("DOMContentLoaded", () => {
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

// ------------------------------------------------

import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("HabitsData", {
  getFilesTitles: () => fs.readdirSync("./DATA/habits"),
  createJSONHaFileHabit: (FileName: string) => createJSONHaFileHabit(FileName),
  getJSONFileData: (filePath: string) =>
    fs.readFileSync(`./DATA/habits/${filePath}.json`, "utf8"),
  editCalenderFileJSON: (fileName: string, month: string, day: string) =>
    editCalenderFileJSON(fileName, month, day),
  deleteJSONFile,
  renameJSONFile,

  changeOrder: (habitName: string, oldNumber: string, newNumber: string) =>
    changeOrder(habitName, oldNumber, newNumber),
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

function deleteJSONFile(filePath: string) {
  fs.unlink(`./DATA/${filePath}.json`, (err) => {
    if (err) {
      throw err;
    }
  });
}

function renameJSONFile(oldFilePaht: string, newFilePaht: string) {
  fs.rename(
    `./DATA/${oldFilePaht}.json`,
    `./DATA/${newFilePaht}.json`,
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
}
// -------------------------
function changeOrder(habitName: string, oldNumber: string, newNumber: string) {
  const fileNsme = habitName.split(" ").join("_").trim();
  const oldFilePaht = `./DATA/habits/habit_${oldNumber}_${fileNsme}.json`;

  const newFilePaht = `./DATA/habits/habit_${newNumber}_${fileNsme}.json`;

  fs.rename(oldFilePaht, newFilePaht, (err) => {
    if (err) {
      throw err;
    }
  });
}
