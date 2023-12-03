import HTML from "../../../../../components/HTML/HTML";
import HabitCheckbox from "./HabitCheckbox";

export default function HabitColumnComponent(
  numberOfDaysInThisMonth: number,
  todayNum: number,
  habitNum: string,
  habitName: string,
  habitGroupColor: string,
  thisMonthData: any
) {
  const styles =
    "group w-fit flex flex-col border border-blue-800 hover:border-blue-500 transition-colors";
  const columnContainer = HTML("div", styles);

  columnContainer.dataset.habitNum = habitNum;
  columnContainer.dataset.habitName = habitName;

  // habit number
  const colHead = HTML(
    "div",
    "w-10 h-10 text-center text-blue-50 flex justify-center items-center font-bold group-hover:bg-blue-600 transition-colors",
    "",
    habitNum
  );
  columnContainer.append(colHead);

  // console.log(thisMonthData);

  // checkbox column
  for (let i = 1; i <= numberOfDaysInThisMonth; i++) {
    const [isChecked, time] = thisMonthData[i] || [false, 0];
    // console.log(isChecked, time);

    const highlightToday = todayNum === i;
    columnContainer.append(
      HabitCheckbox(highlightToday, isChecked, habitName, i, habitGroupColor)
    );
  }

  return columnContainer;
}
