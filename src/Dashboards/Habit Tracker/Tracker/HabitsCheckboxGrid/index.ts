import HTML from "../../../../components/HTML/HTML";
import DaysColumn from "./DaysColumn";
import HabitsColumnsContainer from "./HabitsColumnsContainer";

export default function HabitsCheckboxGrid() {
  const styles = "w-96 h-full mx-auto flex";
  const HabitsCheckboxGridContainer = HTML("div", styles);

  const DATE = new Date();
  const thisYear = DATE.getFullYear();
  const thisMonthNum = DATE.getMonth();
  const todayNum = DATE.getDate();
  const numberOfDaysInThisMonth = new Date(
    thisYear,
    thisMonthNum - 1,
    0
  ).getDate();

  HabitsCheckboxGridContainer.append(
    DaysColumn(numberOfDaysInThisMonth, todayNum),
    HabitsColumnsContainer(numberOfDaysInThisMonth, todayNum)
  );
  return HabitsCheckboxGridContainer;
}
