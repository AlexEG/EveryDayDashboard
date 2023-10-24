import HTML from "../../HTML/HTML";

export default function TableBody(data: any) {
  const habitsNames = Object.keys(data);
  const thisMonth = new Date().getMonth();
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
      const dataCell = HTML(
        "td",
        "text-white px-4 border-r border-r-neutral-500"
      );
      // peer peer-hover:bg-neutral-950 group-hover/row:bg-pink-500
      dataCell.dataset.row = `${i}`;
      dataCell.dataset.col = `${j + 1}`;
      dataCell.dataset.habitName = habitsNames[j];
      dataCell.dataset.month = monthNames[thisMonth][0].toString();

      // group-hover/row:border - peer-hover:border-y-0
      const checkbox = HTML("input", "accent-pink-500 w-5 h-5 cursor-pointer");
      checkbox.setAttribute("type", "checkbox");

      const title = `[${habitsNames[j].split("_")[1]}] ${habitsNames[j]
        .split("_")
        .slice(2)
        .join(" ")}`;
      checkbox.setAttribute("title", title);
      // --------------------
      // const thisMonthData = data[habitsNames[2]][monthNames[thisMonth][0]];
      // console.log(thisMonthData);
      if (data[habitsNames[j]][monthNames[thisMonth][0]][i]) {
        checkbox.setAttribute("checked", "");
      }

      // --------------------

      dataCell.append(checkbox);
      tableRow.append(dataCell);
    }

    tbody.append(tableRow);
  }

  return tbody;
}
