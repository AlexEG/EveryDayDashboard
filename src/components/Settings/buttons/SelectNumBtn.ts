import HTML from "../../HTML/HTML";

export default function SelectNumBtn(
  maxOptionNum: number,
  SelectedOption: number,
  callback: any,
) {
  const styles = "w-fit h-10 flex items-center justify-center px-4";
  const selectContainer = HTML("div", styles);

  const styles2 =
    "sidebar-change-order text-indigo-600 bg-neutral-900 focus:outline-indigo-400";
  const select = HTML("select", styles2, "", "", {
    value: `${SelectedOption + 1}`,
  });

  selectContainer.append(select);

  for (let i = 0; i < maxOptionNum; i++) {
    const option = HTML("option", "", "", `${i + 1}`);
    option.setAttribute("value", `${i + 1}`);

    if (i === SelectedOption) {
      option.setAttribute("selected", "");
    }

    select.append(option);
  }

  select.onchange = (e) => callback(e);

  return selectContainer;
}
