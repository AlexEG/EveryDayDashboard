import HTML from "../../../components/HTML/HTML";

export default function DataCell(
  data,
  i,
  j,
  habitsNames,
  monthNames,
  thisMonth
) {
  const dataCell = HTML("td", "text-white px-4 border-r border-r-neutral-500");
  // peer peer-hover:bg-neutral-950 group-hover/row:bg-pink-500
  dataCell.dataset.row = `${i}`;
  dataCell.dataset.col = `${j + 1}`;
  dataCell.dataset.habitName = habitsNames[j];
  dataCell.dataset.month = monthNames[thisMonth][0].toString();

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
  checkbox.onclick = () => {
    const habitName = checkbox.parentElement.dataset.habitName;
    const month = checkbox.parentElement.dataset.month;
    const day = checkbox.parentElement.dataset.row;

    if (checkbox.hasAttribute("checked")) {
      checkbox.removeAttribute("checked");
      console.log(
        `%c Uncheck %c ${habitName}\n%c Time %c ${month},${day}`,
        "background:black; color:white",
        "color:#c00",
        "background:black; color:white",
        "color:#309"
      );
    } else {
      checkbox.setAttribute("checked", "");
      console.log(
        `%c Check %c ${habitName}\n%c Time %c ${month},${day}`,
        "background:black; color:white",
        "color:#090",
        "background:black; color:white",
        "color:#309"
      );
    }

    window.DATA.editCalenderFileJSON(habitName, month, day);
  };
  // --------------------
  // const thisMonthData = data[habitsNames[2]][monthNames[thisMonth][0]];
  // console.log(thisMonthData);
  if (data[habitsNames[j]][monthNames[thisMonth][0]][i]) {
    checkbox.setAttribute("checked", "");
  }

  // --------------------

  dataCell.append(checkbox);
  return dataCell;
}