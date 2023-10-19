import HTML from "../../HTML/HTML";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import HabitsNamesNums from "../habits-header/HabitsNamesNums";

export default function HabitsTable() {
  const tableContainer = HTML("section", "overflow-auto h-full flex");

  const styles = "border border-neutral-200";
  const table = HTML("table", styles);

  table.append(TableHead(20), TableBody(30, 20));

  tableContainer.append(HabitsNamesNums(), table);
  return tableContainer;
}
