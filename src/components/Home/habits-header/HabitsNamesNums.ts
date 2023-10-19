import HTML from "../../HTML/HTML";

export default function HabitsNamesNums() {
  const styles = "flex flex-col text-neutral-200 w-fit h-fit pr-1";
  const container = HTML("section", styles);

  const fileNames = window.HabitsData.getFilesTitles().sort(
    (a: string, b: string) =>
      +a.split("_").slice(1, 2) - +b.split("_").slice(1, 2)
  );

  for (let i = 0; i < fileNames.length; i++) {
    const habitNum = +fileNames[i].split("_")[1];
    const habitTitle = fileNames[i].split("_").slice(2).join(" ").slice(0, -5);

    console.log(habitNum, habitTitle);

    const habit = HTML("div");

    const span1 = HTML(
      "span",
      "bg-neutral-300 text-neutral-950 px-1 rounded-sm",
      "",
      `${habitNum}`
    );
    const span2 = HTML("span", "px-1 whitespace-nowrap", "", `${habitTitle}`);
    habit.append(span1, span2);
    container.append(habit);
  }

  return container;
}
