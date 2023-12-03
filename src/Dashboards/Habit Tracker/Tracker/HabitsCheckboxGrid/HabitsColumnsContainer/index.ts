import HTML from "../../../../../components/HTML/HTML";
import HabitColumnComponent from "./HabitColumnComponent";

export default function HabitsColumnsContainer(
  numberOfDaysInThisMonth: number,
  todayNum: number
) {
  const styles = "flex";
  const HabitsColumnsContainer = HTML("div", styles);

  HabitsColumnsContainer.append(
    HabitColumnComponent(numberOfDaysInThisMonth, todayNum),
    HabitColumnComponent(numberOfDaysInThisMonth, todayNum),
    HabitColumnComponent(numberOfDaysInThisMonth, todayNum)
  );

  return HabitsColumnsContainer;
}
