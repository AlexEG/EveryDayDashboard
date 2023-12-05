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
    "group w-fit flex flex-col border-r border-t border-b border-blue-800 relative  hover:after:absolute after:top-0 after:bottom-0 after:-right-0.5 after:w-0.5 after:bg-blue-500  hover:before:absolute before:top-0 before:bottom-0 before:-left-0.5 before:w-0.5 before:bg-blue-500 z-40 hover:z-50 hover:border-x-none last:after:absolute last:after:bg-blue-800 last:hover:after:bg-blue-500";
  const columnContainer = HTML("div", styles);

  columnContainer.dataset.habitNum = habitNum;
  columnContainer.dataset.habitName = habitName;

  // habit number
  const colHead = HTML(
    "div",
    "w-10 h-10 text-center text-blue-50 flex justify-center items-center font-bold group-hover:bg-blue-500 transition-colors border-b border-b-blue-800",
    "",
    habitNum
  );
  columnContainer.append(colHead);

  console.log(thisMonthData);

  // checkbox column

  for (let i = 1; i <= numberOfDaysInThisMonth; i++) {
    const isChecked_time = thisMonthData[i];
    console.log(isChecked_time);

    const highlightToday = todayNum === i;
    columnContainer.append(
      HabitCheckbox(
        highlightToday,
        isChecked_time,
        habitName,
        i,
        habitGroupColor
      )
    );
  }

  return columnContainer;
}
