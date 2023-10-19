import HTML from "../../HTML/HTML";

export default function TableHead(columnsNum: number) {
  const styles = "border";
  const thead = HTML("thead", styles);
  const tableRow = HTML("tr");

  // days cell
  const headerCellDays = HTML("th", "text-white border", "", "Day");
  tableRow.append(headerCellDays);

  for (let i = 0; i < columnsNum; i++) {
    const headerCell = HTML("th", "text-white", "", `${i + 1}`);
    tableRow.append(headerCell);
  }

  thead.append(tableRow);
  return thead;
}
