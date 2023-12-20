export default function HabitTrackerDATA() {
  const fileNames = window.DATA.getHabitTrackerFileNames().sort(
    (a: string, b: string) =>
      +a.split("_").slice(1, 2) - +b.split("_").slice(1, 2)
  );

  const FileData = new Promise((res, rej) => {
    const ALLDATA = {};
    for (let i = 0; i < fileNames.length; i++) {
      ALLDATA[fileNames[i].split(".")[0]] = JSON.parse(
        window.DATA.getJSONFileData(
          `dashboards/habit-tracker/${fileNames[i].split(".")[0]}`
        )
      )["data"];
    }

    res(ALLDATA);
  });

  return FileData;
}
