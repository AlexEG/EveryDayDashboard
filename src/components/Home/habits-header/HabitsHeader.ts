import HTML from "../../HTML/HTML";
import HabitsNamesNums from "./HabitsNamesNums";

export default function HabitsHeader() {
  const styles = "mb-5 h-20 bg-gray-600";
  const header = HTML("header", styles);

  header.append(HabitsNamesNums());
  return header;
}
