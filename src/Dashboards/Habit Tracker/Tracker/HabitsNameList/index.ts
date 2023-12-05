import HTML from "../../../../components/HTML/HTML";
import HabitTrackerDATA from "../../HabitTrackerDATA";

export default function HabitsNameList() {
  const styles = "h-full text-sm";
  const HabitsNameListContainer = HTML("div", styles);

  HabitTrackerDATA().then((data) => {
    // console.log(data);
    for (const [fileName, value] of Object.entries(data)) {
      const habitNum = fileName.match(/\d+(?=_)/)[0];
      const habitName = fileName.match(/(?<=\d+_).*/)[0].replace(/_/g, " ");

      const metadata = value["metadata"];

      // console.log(fileName, value);
      // console.log(habitNum, habitName);

      const habit = HTML("div", "mb-0.5");
      const span1 = HTML(
        "span",
        "bg-indigo-300 text-indigo-950 px-1 rounded-sm",
        "",
        habitNum
      );

      const span2 = HTML("span", "pl-1 whitespace-nowrap ", "", habitName);
      span2.style.color = metadata.groupColor || "#ffffff";

      habit.append(span1, span2);
      HabitsNameListContainer.append(habit);
    }
  });

  return HabitsNameListContainer;
}
