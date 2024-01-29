import fs from "fs";
import https from "https";

Mkdir("./DATA");
Mkdir("./DATA/dashboards");
Mkdir("./DATA/settings");
Mkdir("./DATA/dashboards/habit-tracker");
Mkdir("./DATA/dashboards/anilist");
Mkdir("./DATA/dashboards/achievements");
Mkdir("./DATA/dashboards/anilist/media");
Mkdir("./DATA/dashboards/anilist/media/user");
Mkdir("./DATA/dashboards/anilist/media/characters");
Mkdir("./DATA/dashboards/anilist/media/staff");
{
  Mkdir("./DATA/dashboards/anilist/media/manga");
  Mkdir("./DATA/dashboards/anilist/media/manga/banner");
  Mkdir("./DATA/dashboards/anilist/media/manga/cover-image");
  Mkdir("./DATA/dashboards/anilist/media/manga/cover-image/large");
  Mkdir("./DATA/dashboards/anilist/media/manga/cover-image/extraLarge");
}
{
  Mkdir("./DATA/dashboards/anilist/media/anime");
  Mkdir("./DATA/dashboards/anilist/media/anime/banner");
  Mkdir("./DATA/dashboards/anilist/media/anime/cover-image");
  Mkdir("./DATA/dashboards/anilist/media/anime/cover-image/large");
  Mkdir("./DATA/dashboards/anilist/media/anime/cover-image/extraLarge");
}
// _________________________________________________________ //

/**
 *
 * ! createJSONHaFileHabit
 * create new json file w/ the emptyDataHabit() contnet
 * Done
 *
 */
function createJSONHaFileHabit(FileName: string) {
  const habitsFiles = fs.readdirSync("./DATA/dashboards/habit-tracker");
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
        .sort((a, b) => +a - +b),
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
  const emptyDataHabit = {
    data: { metadata: {}, habitData: {} },
  };

  fs.writeFile(
    `./DATA/dashboards/habit-tracker/habit_${availableFileNumber}_${FileName}.json`,

    JSON.stringify(emptyDataHabit),
    (err) => {
      if (err) console.error(err);
    },
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
          console.error(error);
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
function editCalenderFileJSON(
  fileName: string,
  month: string,
  day: string,
  time: string[],
) {
  fs.readFile(`./DATA/habits/${fileName}.json`, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const jsonData = JSON.parse(data);

    jsonData[month][day] = [!jsonData[month][day][0], time];

    fs.writeFile(
      `./DATA/habits/${fileName}.json`,
      JSON.stringify(jsonData),
      function (err) {
        if (err) throw err;
      },
    );
  });
}

// ------------------------------------------------

import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("DATA", {
  getFilesTitles: () => fs.readdirSync("./DATA/habits"),
  getHabitTrackerFileNames: () =>
    fs.readdirSync("./DATA/dashboards/habit-tracker"),
  readDir: (path: string) => fs.readdirSync(`./DATA/dashboards/${path}`),
  getAchievementsFileNames: () =>
    fs.readdirSync("./DATA/dashboards/achievements"),
  createJSONHaFileHabit,
  getJSONFileData: (filePath: string) =>
    fs.readFileSync(`./DATA/${filePath}.json`, "utf8"),
  editCalenderFileJSON,
  deleteJSONFile,
  renameJSONFile,
  editSettingsJSONFile_ON_OFF,
  editSettingsJSONFile_Value,
  downloadImg,
  CreateOrUpdateJSON,
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
    },
  );
}

function editSettingsJSONFile_ON_OFF(
  path: string,
  key: string,
  key2?: string,
  key3?: string,
) {
  fs.readFile(`./DATA/${path}.json`, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const jsonData = JSON.parse(data);
    if (key2 && key3) {
      jsonData[key][key2][key3] = !jsonData[key][key2][key3];
    } else if (key && key2) {
      jsonData[key][key2] = !jsonData[key][key2];
    } else {
      jsonData[key] = !jsonData[key];
    }

    fs.writeFile(
      `./DATA/${path}.json`,
      JSON.stringify(jsonData),
      function (err) {
        if (err) throw err;
      },
    );
  });
}
function editSettingsJSONFile_Value(
  path: string,
  key: string,
  value: any,
  key2?: string,
  key3?: string,
) {
  fs.readFile(`./DATA/${path}.json`, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const jsonData = JSON.parse(data);

    key3
      ? (jsonData[key][key2][key3] = value)
      : key2
        ? (jsonData[key][key2] = value)
        : (jsonData[key] = value);

    fs.writeFile(
      `./DATA/${path}.json`,
      JSON.stringify(jsonData),
      function (err) {
        if (err) throw err;
      },
    );
  });
}

function downloadImg(
  imgURL: string,
  imgFileName: string,
  pathToSave: string,
  logMessage: string,
) {
  const file = fs.createWriteStream(`DATA/${pathToSave}/${imgFileName}`);

  https
    .get(imgURL, (response) => {
      response.pipe(file);

      file.on("finish", () => {
        file.close();
        console.log(...logMessage);
      });
    })
    .on("error", (err) => {
      fs.unlink(imgFileName, () => console.error("ERROR"));
      console.error(`Error downloading image: ${err.message}`);
    });
}

// downloadImg();

// const imageName = String(imageUrl.match(/(?<=banner\/).*/g));

function CreateOrUpdateJSON(filePath: string, data: any) {
  fs.writeFile(`./DATA/${filePath}`, JSON.stringify(data), function (err) {
    if (err) throw err;
  });
}
