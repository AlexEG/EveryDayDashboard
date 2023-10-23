import HTML from "../../../../HTML/HTML";

export default function OrderBtn() {
  const selectContainer = HTML("div", "text-xs");
  const select = HTML(
    "select",
    "sidebar-change-order text-indigo-600 bg-slate-950"
  );
  select.setAttribute("value", "");
  const option1 = HTML("option", "", "", "1");
  const option2 = HTML("option", "", "", "2");
  const option3 = HTML("option", "", "", "3");
  const option4 = HTML("option", "", "", "4");
  select.append(option1, option2, option3, option4);

  selectContainer.append(select);

  return selectContainer;
}
