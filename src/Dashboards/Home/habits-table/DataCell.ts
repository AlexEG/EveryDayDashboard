import HTML from "../../../components/HTML/HTML";
// import SettingsHomeDATA from "../SettingsHomeDATA";

export default function DataCell(
  data: any,
  i: number,
  j: number,
  habitsNames: string[],
  monthNames: (string | number)[][],
  thisMonth: number,
  habitsColors: any
) {
  // console.log(habitsColors);

  const dataCell = HTML("td", "text-white px-4 border-r border-r-neutral-500");
  // peer peer-hover:bg-neutral-950 group-hover/row:bg-pink-500
  dataCell.dataset.row = `${i}`;
  dataCell.dataset.col = `${j + 1}`;
  dataCell.dataset.habitName = habitsNames[j];
  dataCell.dataset.month = monthNames[thisMonth][0].toString();
  dataCell.dataset.checkedTime =
    data[habitsNames[j]][monthNames[thisMonth][0]][i][1];

  // group-hover/row:border - peer-hover:border-y-0
  const title = `[${habitsNames[j].split("_")[1]}] ${habitsNames[j]
    .split("_")
    .slice(2)
    .join(" ")}`;

  const styles =
    "relative accent-indigo-600 w-5 h-5 cursor-pointer after:content-[attr(customtitle)] after:absolute after:-top-2 after:left-1/2 after:text-indigo-200 after:bg-indigo-950 after:px-2 after:py-0.5 after:-translate-y-full after:-translate-x-1/2 after:whitespace-nowrap after:invisible hover:after:visible after:rounded-md";

  const checkbox = HTML("input", styles, "", "", {
    type: "checkbox",
    customtitle: title,
  });

  // add color
  const habitColor = habitsColors[habitsNames[j].split("_").slice(2).join(" ")];
  // console.log(habitColor);
  checkbox.style.accentColor = habitColor ? habitColor : "";

  checkbox.onclick = () => {
    const habitName = checkbox.parentElement.dataset.habitName;
    const month = checkbox.parentElement.dataset.month;
    const day = checkbox.parentElement.dataset.row;

    const date = new Date();
    const time = date.toString().split(" ").slice(0, 5).join(" ");

    checkbox.hasAttribute("checked")
      ? checkbox.removeAttribute("checked")
      : checkbox.setAttribute("checked", "");

    console.log(
      `%c ${
        checkbox.hasAttribute("checked") ? "Check" : "Uncheck"
      } %c ${habitName} \n%c Day${
        checkbox.hasAttribute("checked") ? "   " : "     "
      }%c ${month} ${day} \n%c Time${
        checkbox.hasAttribute("checked") ? "  " : "    "
      }%c ${time} `,
      "background:black; color:white",
      `background:black; color:#${
        checkbox.hasAttribute("checked") ? "0f0" : "f00"
      }`,
      "background:black; color:white",
      "background:black; color:#ffd269",
      "background:black; color:white",
      "background:black; color:#df37fc"
    );

    window.DATA.editCalenderFileJSON(habitName, month, day);
  };
  // --------------------
  // const thisMonthData = data[habitsNames[2]][monthNames[thisMonth][0]];
  // console.log(thisMonthData);
  if (data[habitsNames[j]][monthNames[thisMonth][0]][i][0]) {
    checkbox.setAttribute("checked", "");
  }

  // --------------------

  dataCell.append(checkbox);
  // }); // for SettingsHomeDATA
  return dataCell;
}
