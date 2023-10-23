import HTML from "../../../../HTML/HTML";

export default function OrderBtn(habitNum: number, numberOfHabits: number) {
  const selectContainer = HTML("div", "text-xs");
  const select = HTML(
    "select",
    "sidebar-change-order text-indigo-600 bg-slate-950"
  );
  select.setAttribute("value", `${habitNum + 1}`);

  for (let i = 0; i <= numberOfHabits; i++) {
    const option = HTML("option", "", "", `${i + 1}`);
    option.setAttribute("value", `${i + 1}`);

    if (i === +habitNum) {
      option.setAttribute("selected", "");
    }

    select.append(option);
  }

  selectContainer.append(select);
  return selectContainer;
}
