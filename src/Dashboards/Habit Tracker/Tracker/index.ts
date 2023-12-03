import HTML from "../../../components/HTML/HTML";
import HabitsNameList from "./HabitsNameList";
import HabitsCheckboxGrid from "./HabitsCheckboxGrid";

export default function Tracker() {
  const styles = "border border-blue-700 flex gap-x-4 p-2";
  const trackerContainer = HTML("section", styles);

  trackerContainer.append(HabitsNameList(), HabitsCheckboxGrid());
  return trackerContainer;
}
