import HTML from "../../../components/HTML/HTML";
import HabitsNameList from "./HabitsNameList";
import HabitsCheckboxGrid from "./HabitsCheckboxGrid";

export default function Tracker(isHabitListDisplayedByDefault: boolean) {
  const styles = "flex gap-x-4 p-2";
  const trackerContainer = HTML("section", styles, "habit-tracker--tracker");

  trackerContainer.append(
    HabitsNameList(isHabitListDisplayedByDefault),
    HabitsCheckboxGrid(),
  );

  return trackerContainer;
}
