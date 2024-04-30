import HTML from "../../../../components/HTML/HTML";
import DaysColumn from "./DaysColumn";
import HabitsColumnsContainer from "./HabitsColumnsContainer";
import DailyProgressColumn from "./DailyProgressColumn";

export default function HabitsCheckboxGrid(year?: number, month?: number) {
  const styles = "w-fit h-full flex border border-blue-800";
  const HabitsCheckboxGridContainer = HTML(
    "div",
    styles,
    "habits-checkbox-grid",
  );

  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const DATE = new Date();
  const thisYear = year || DATE.getFullYear();
  const thisMonthNum = month || DATE.getMonth();
  const thisMonthName = MONTHS[thisMonthNum];
  const todayNum = DATE.getDate();
  const numberOfDaysInThisMonth = new Date(
    thisYear,
    thisMonthNum + 1,
    0,
  ).getDate();

  HabitsCheckboxGridContainer.append(
    DaysColumn(numberOfDaysInThisMonth, todayNum),
    HabitsColumnsContainer(
      numberOfDaysInThisMonth,
      thisMonthName,
      todayNum,
      thisYear,
    ),
    DailyProgressColumn(
      numberOfDaysInThisMonth,
      thisMonthName,
      todayNum,
      thisYear,
    ),
  );
  return HabitsCheckboxGridContainer;
}
