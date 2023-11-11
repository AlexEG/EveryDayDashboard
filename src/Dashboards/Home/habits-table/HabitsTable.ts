import HTML from "../../../components/HTML/HTML";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import AllHabitsDATA from "./AllHabitsDATA";

export default function HabitsTable() {
  const styles = "overflow-auto h-full flex relative";
  const tableContainer = HTML("section", styles);
  const table = HTML(
    "table",
    "border border-neutral-200 mx-auto",
    "habits-table"
  );

  AllHabitsDATA().then((data) => {
    const habitsNames = Object.keys(data);

    // console.log(data[habitsNames[0]][monthNames[thisMonth][0]][5]);

    table.append(TableHead(habitsNames), TableBody(data));
  });

  tableContainer.append(table);
  return tableContainer;
}
