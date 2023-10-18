import HTML from "../../HTML/HTML";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function HabitsTable() {
  const styles = "border";
  const table = HTML("table", styles);

  table.append(TableHead(20), TableBody(30, 20));

  return table;
}
