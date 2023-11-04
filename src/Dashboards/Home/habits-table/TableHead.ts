import HTML from "../../../components/HTML/HTML";

export default function TableHead(habitsNames: string[]) {
  const styles = "border";
  const thead = HTML("thead", styles);
  const tableRow = HTML("tr");

  // days cell
  const headerCellDays = HTML("th", "text-white border", "", "Day");
  tableRow.append(headerCellDays);

  for (let i = 0; i < habitsNames.length; i++) {
    const headerCell = HTML("th", "text-white", "", `${i + 1}`);
    headerCell.dataset.habitName = habitsNames[i];
    tableRow.append(headerCell);
  }

  thead.append(tableRow);
  return thead;
}
