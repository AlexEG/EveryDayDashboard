import HTML from "../../../HTML/HTML";

export default function ToggleBtn(labelTitle: string, inputID: string) {
  const wrapper = HTML("div", "flex");

  const styles =
    "toggle bg-indigo-950 brightness-90 rounded-full w-12 flex px-0.5 py-0.5 items-center justify-start";
  const toggle = HTML("div", styles);

  const checkbox = HTML("input", "w-4 h-4 mx-auto invisible", inputID);
  checkbox.setAttribute("type", "checkbox");

  const circle = HTML(
    "div",
    "bg-indigo-50 rounded-full w-5 h-5 flex items-center"
  );
  const labelStyles = "text-indigo-300 pl-3 pr-2 first:pl-0";

  const label = HTML("label", labelStyles, "", labelTitle);
  label.setAttribute("for", inputID);

  circle.append(checkbox);
  toggle.append(circle);
  wrapper.append(label, toggle);
  return wrapper;
}
