import HTML from "../../HTML/HTML";

export default function SelectYearBtn(callback: any) {
  const styles =
    "text-indigo-100 bg-transparent font-medium pl-0.5 border-2 focus-within:outline-indigo-600 border-indigo-600 ";
  const select = HTML("select", styles);

  // ---------------------

  const YEARS = [2023, 2024];
  const thisYear = Date().slice(11, 15); // 2023

  // ---------------------
  for (let i = 0; i < YEARS.length; i++) {
    const option = HTML("option", "bg-neutral-950", "", String(YEARS[i]), {
      value: String(YEARS[i]),
    });

    if (YEARS[i] === +thisYear) {
      option.setAttribute("selected", "");
    }
    select.append(option);
  }

  // ----
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

  select.dataset.month = monthNames[thisMonth] + "-" + thisMonth;

  select.onchange = ({ target }) => callback(target);
  return select;
}
