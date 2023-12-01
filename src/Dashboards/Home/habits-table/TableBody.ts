import HTML from "../../../components/HTML/HTML";
import DataCell from "./DataCell";

export default function TableBody(
  data: any,
  habitsColors: any,
  year?: number,
  month?: number
) {
  const habitsNames = Object.keys(data);
  const thisMonth = month || new Date().getMonth();

  const monthNames = [
    ["January", 31],
    ["February", 28],
    ["March", 31],
    ["April", 30],
    ["May", 31],
    ["June", 30],
    ["July", 31],
    ["August", 31],
    ["September", 30],
    ["October", 31],
    ["November", 30],
    ["December", 31],
  ];

  const MonthDays = +monthNames[thisMonth][1];

  // --------------------------
  const tbody = HTML("tbody");

  const date = new Date();
  const today = +date.toDateString().split(" ")[2];

  // ROWs
  for (let i = 1; i <= MonthDays; i++) {
    const rowStyle =
      i === today
        ? ""
        : i < today
        ? "opacity-25"
        : "opacity-5 cursor-not-allowed";

    const tableRow = HTML("tr", rowStyle);

    // -------------------
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
    // -------------------
    // Data COLs

    for (let j = 0; j < habitsNames.length; j++) {
      tableRow.append(
        DataCell(data, i, j, habitsNames, monthNames, thisMonth, habitsColors)
      );
    }
    tbody.append(tableRow);
  }

  return tbody;
}
