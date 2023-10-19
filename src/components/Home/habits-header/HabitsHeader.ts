import HTML from "../../HTML/HTML";
import HabitsNamesNums from "../habits-table/titles-add-btn/HabitsNamesNums";

export default function HabitsHeader() {
  const styles = "mb-5 h-20 bg-gray-600";
  const header = HTML("header", styles);

  header.append(HabitsNamesNums());
  return header;
}
