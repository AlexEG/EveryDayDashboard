import HTML from "../../../../components/HTML/HTML";

export default function HabitsNameList() {
  const styles = "h-full text-sm";
  const HabitsNameListContainer = HTML("div", styles);

  // get file names + order
  const fileNames = window.DATA.getFilesTitles().sort(
    (a: string, b: string) =>
      +a.split("_").slice(1, 2) - +b.split("_").slice(1, 2)
  );
  // console.log(fileNames);

  // get colors
  const SettingsHomeDATA = new Promise((res, rej) => {
    res(JSON.parse(window.DATA.getJSONFileData("settings/home")));
  });

  SettingsHomeDATA.then((data) => {
    // console.log(data);
    const habitsColor = data["habitsColor"];

    for (const fileName of fileNames) {
      const habitNum = fileName.match(/\d+(?=_)/)[0];
      const habitName = fileName
        .match(/(?<=\d+_).*(?=\.json)/)[0]
        .replace(/_/g, " ");

      // console.log(habitNum);
      // console.log(habitName);

      const habit = HTML("div", "mb-0.5");
      const span1 = HTML(
        "span",
        "bg-indigo-300 text-indigo-950 px-1 rounded-sm",
        "",
        habitNum
      );

      const span2 = HTML("span", "pl-1 whitespace-nowrap ", "", habitName);
      span2.style.color = habitsColor[habitName] || "#ffffff";

      habit.append(span1, span2);
      HabitsNameListContainer.append(habit);
    }
  });

  return HabitsNameListContainer;
}
