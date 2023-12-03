import HTML from "../../../../../components/HTML/HTML";
import HabitCheckbox from "./HabitCheckbox";

export default function HabitColumnComponent(
  numberOfDaysInThisMonth: number,
  todayNum: number
) {
  const styles =
    "group w-fit flex flex-col border border-blue-800 hover:border-blue-500 transition-colors";
  const container = HTML("div", styles);

  // habit number

  const colHead = HTML(
    "div",
    "w-10 h-10 text-center text-blue-50 flex justify-center items-center font-bold group-hover:bg-blue-600 transition-colors",
    "",
    "1"
  );
  container.append(colHead);

  // checkbox column
  for (let i = 1; i <= numberOfDaysInThisMonth; i++) {
    const highlightToday = todayNum === i;
    container.append(HabitCheckbox(highlightToday));
  }

  return container;
}
