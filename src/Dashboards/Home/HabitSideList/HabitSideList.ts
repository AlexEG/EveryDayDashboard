import HTML from "../../../components/HTML/HTML";
import AddNewHabitBtn from "./AddNewHabitBtn";

export default function HabitSideList() {
  const styles = "flex flex-col text-indigo-200 w-fit h-fit pr-2 text-sm";
  const container = HTML("section", styles, "habits-names-nums");
  const habitsContainer = HTML("div", "", "habits-container-2");

  const fileNames = window.DATA.getFilesTitles().sort(
    (a: string, b: string) =>
      +a.split("_").slice(1, 2) - +b.split("_").slice(1, 2)
  );

  for (let i = 0; i < fileNames.length; i++) {
    const habitNum = +fileNames[i].split("_")[1];
    const habitTitle = fileNames[i].split("_").slice(2).join(" ").slice(0, -5);

    const habit = HTML("div", "mb-0.5");
    habit.dataset.habitNumber = habitNum.toString();
    const span1 = HTML(
      "span",
      "bg-indigo-300 text-indigo-950 px-1 rounded-sm ",
      "",
      `${habitNum}`
    );
    const span2 = HTML("span", "pl-1 whitespace-nowrap", "", `${habitTitle}`);
    habit.append(span1, span2);
    habitsContainer.append(habit);
  }

  // console.log(fileNames[0].split(".")[0]);
  container.append(habitsContainer, AddNewHabitBtn());
  return container;
}