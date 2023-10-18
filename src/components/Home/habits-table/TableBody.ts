import HTML from "../../HTML/HTML";

export default function TableBody(rowsNum: number, columnsNum: number) {
  const tbody = HTML("tbody");

  const styles = "brightness-50 cursor-pointer";

  // ROWs
  for (let i = 0; i < rowsNum; i++) {
    const tableRow = HTML("tr");
    // days column

    const dataCell = HTML(
      "td",
      "text-white px-4 border brightness-50",
      "",
      `${i + 1}`
    );

    tableRow.append(dataCell);

    // Data COLs
    for (let i = 0; i < columnsNum; i++) {
      const dataCell = HTML("td", "text-white py-0.5 px-4 border-l");
      const checkbox = HTML(
        "input",
        "accent-pink-500 w-5 h-5 brightness-50 cursor-pointer"
      );
      checkbox.setAttribute("type", "checkbox");
      dataCell.append(checkbox);
      tableRow.append(dataCell);
    }

    tbody.append(tableRow);
  }

  return tbody;
}
