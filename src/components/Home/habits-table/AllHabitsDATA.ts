export default function AllHabitsDATA() {
  const fileNames = window.HabitsData.getFilesTitles().sort(
    (a: string, b: string) =>
      +a.split("_").slice(1, 2) - +b.split("_").slice(1, 2)
  );

  const FileData = new Promise((res, rej) => {
    const ALLDATA = {};
    for (let i = 0; i < fileNames.length; i++) {
      ALLDATA[fileNames[i].split(".")[0]] = JSON.parse(
        window.HabitsData.getJSONFileData(fileNames[i].split(".")[0])
      );
    }

    res(ALLDATA);
  });

  return FileData;
}
