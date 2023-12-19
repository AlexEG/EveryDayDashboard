import HTML from "../../../../components/HTML/HTML";
import HabitTrackerDATA from "../../HabitTrackerDATA";

export default function HabitsNameList(isHabitListDisplayedByDefault: boolean) {
  const styles = `h-full text-sm ${
    isHabitListDisplayedByDefault ? "" : "hidden"
  }`;

  console.log("isHabitListDisplayedByDefault", isHabitListDisplayedByDefault);
  const HabitsNameListContainer = HTML(
    "div",
    styles,
    "habit-tracker--tracker--habit-list"
  );

  HabitTrackerDATA().then((data) => {
    // console.log(data);
    for (const [fileName, value] of Object.entries(data)) {
      const habitNum = fileName.match(/\d+(?=_)/)[0];
      const habitName = fileName.match(/(?<=\d+_).*/)[0].replace(/_/g, " ");

      const metadata = value["metadata"];

      // console.log(fileName, value);
      // console.log(habitNum, habitName);

      const habit = HTML("div", "mb-0.5 grid grid-cols-[25px_1fr] gap-x-2");
      const span1 = HTML(
        "span",
        `bg-white/10 text-white/90 rounded-sm text-center`,
        "",
        habitNum
      );

      const span2 = HTML("span", "whitespace-nowrap", "", habitName);
      span2.style.color = metadata.groupColor || "#ffffff";

      habit.append(span1, span2);
      HabitsNameListContainer.append(habit);
    }
  }); // HabitTrackerDATA END

  return HabitsNameListContainer;
}
