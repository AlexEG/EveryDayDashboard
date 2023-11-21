import HTML from "../../HTML/HTML";

export default function SelectMonthBtn(callback: any) {
  const styles =
    "text-indigo-100 bg-transparent font-medium pl-0.5 border-2 focus-within:outline-indigo-600 border-indigo-600 ";
  const select = HTML("select", styles);

  // ---------------------
  const thisMonth = new Date().getMonth();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // ---------------------
  for (let i = 0; i < monthNames.length; i++) {
    const option = HTML("option", "bg-neutral-950", "", monthNames[i], {
      value: `${monthNames[i]}-${i}`,
    });

    if (monthNames[i] === monthNames[thisMonth]) {
      option.setAttribute("selected", "");
    }
    select.append(option);
  }

  select.onchange = ({ target }) => callback(target);
  return select;
}
