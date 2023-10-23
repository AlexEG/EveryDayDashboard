import HTML from "../../HTML/HTML";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import HabitsNamesNums from "../add-new-habit/HabitsNamesNums";
import AllHabitsDATA from "./AllHabitsDATA";

export default function HabitsTable() {
  const tableContainer = HTML("section", "overflow-auto h-full flex");
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

  tableContainer.append(HabitsNamesNums(), table);
  return tableContainer;
}
