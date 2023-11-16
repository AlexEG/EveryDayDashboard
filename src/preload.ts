// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import fs from "fs";

Mkdir("./DATA");
Mkdir("./DATA/habits");
Mkdir("./DATA/Settings");

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
      year[month[0]][i] = [false, "0000-00-00"];
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

    const date = new Date();
    const time = date.toString().split(" ").slice(0, 5);

    jsonData[month][day] = [!jsonData[month][day][0], time];

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

contextBridge.exposeInMainWorld("DATA", {
  getFilesTitles: () => fs.readdirSync("./DATA/habits"),
  createJSONHaFileHabit,
  getJSONFileData: (filePath: string) =>
    fs.readFileSync(`./DATA/${filePath}.json`, "utf8"),
  editCalenderFileJSON,
  deleteJSONFile,
  renameJSONFile,
  editSettingsJSONFile_ON_OFF,
  editSettingsJSONFile_Value,
});

// --------

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

function editSettingsJSONFile_ON_OFF(
  path: string,
  key: string,
  key2?: string,
  key3?: string
) {
  fs.readFile(`./DATA/${path}.json`, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const jsonData = JSON.parse(data);
    if (key2 && key3) {
      jsonData[key][key2][key3] = !jsonData[key][key2][key3];
    } else {
      jsonData[key] = !jsonData[key];
    }

    fs.writeFile(
      `./DATA/${path}.json`,
      JSON.stringify(jsonData),
      function (err) {
        if (err) throw err;
      }
    );
  });
}
function editSettingsJSONFile_Value(
  path: string,
  key: string,
  value: any,
  key2?: string
) {
  fs.readFile(`./DATA/${path}.json`, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const jsonData = JSON.parse(data);

    key2 ? (jsonData[key][key2] = value) : (jsonData[key] = value);

    fs.writeFile(
      `./DATA/${path}.json`,
      JSON.stringify(jsonData),
      function (err) {
        if (err) throw err;
      }
    );
  });
}
