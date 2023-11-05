import HTML from "../../../components/HTML/HTML";

export default function ChangeMonthInPreview() {
  const styles = "bg-indigo-600 absolute top-2 right-2";
  const container = HTML("div", styles);

  const styles2 = "text-indigo-600 bg-neutral-900 focus:outline-indigo-400";
  const select = HTML("select", styles2, "", "", { value: "October" });

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
    const option = HTML("option", "", "", monthNames[i], {
      value: monthNames[i],
    });

    if (monthNames[i] === monthNames[thisMonth]) {
      option.setAttribute("selected", "");
    }

    select.append(option);
  }

  container.append(select);
  return container;
}
