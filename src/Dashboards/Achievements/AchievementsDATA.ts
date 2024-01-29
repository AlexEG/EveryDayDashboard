export default function AchievementsDATA() {
  const fileNames = window.DATA.getAchievementsFileNames().sort(
    (a: string, b: string) => +a.split("_").slice(1) - +b.split("_").slice(1),
  );

  const FileData = new Promise((res, rej) => {
    const ALLDATA = {};
    for (let i = 0; i < fileNames.length; i++) {
      ALLDATA[fileNames[i].split(".")[0]] = JSON.parse(
        window.DATA.getJSONFileData(
          `dashboards/achievements/${fileNames[i].split(".")[0]}`,
        ),
      )["data"];
    }

    res(ALLDATA);
  });

  return FileData;
}
