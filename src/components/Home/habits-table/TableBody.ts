import HTML from "../../HTML/HTML";

export default function TableBody(rowsNum: number, columnsNum: number) {
  const tbody = HTML("tbody");

  const date = new Date();
  const today = date.getUTCDate();
  // ROWs
  for (let i = 1; i <= rowsNum; i++) {
    const rowStyle =
      i === today
        ? "group"
        : i < today
        ? "opacity-25 group"
        : "opacity-5 cursor-not-allowed";

    const tableRow = HTML("tr", rowStyle);
    // days column
    const daysStyle =
      i === today ? "text-neutral-950 bg-neutral-100 font-bold" : "text-white";

    const dataCell = HTML(
      "td",
      `${daysStyle} px-4 border border-neutral-200`,
      "",
      `${i}`
    );

    tableRow.append(dataCell);

    // Data COLs
    for (let i = 0; i < columnsNum; i++) {
      const dataCell = HTML(
        "td",
        "text-white px-4 border-r border-r-neutral-500 group-hover:bg-blue-800"
      );
      const checkbox = HTML("input", "accent-pink-500 w-5 h-5 cursor-pointer");
      checkbox.setAttribute("type", "checkbox");
      dataCell.append(checkbox);
      tableRow.append(dataCell);
    }

    tbody.append(tableRow);
  }

  return tbody;
}
