import HTML from "../../HTML/HTML";

export default function ToggleBtn(
  labelTitle: string,
  inputID: string,
  isOn: boolean,
  callback: any
) {
  const wrapper = HTML("div", "flex items-center px-2");

  const styles = isOn
    ? "bg-indigo-600 rounded-full w-12 flex px-0.5 py-0.5 items-center justify-end cursor-pointer"
    : "bg-indigo-950 opacity-75 rounded-full w-12 flex px-0.5 py-0.5 items-center justify-start cursor-pointer";

  const toggle = HTML("div", styles);

  const checkbox = HTML("input", "w-4 h-4 mx-auto invisible", inputID, "", {
    type: "checkbox",
  });

  isOn && checkbox.setAttribute("checked", "");

  const circle = HTML(
    "div",
    "bg-indigo-50 rounded-full w-5 h-5 flex items-center"
  );
  circle.append(checkbox);
  toggle.append(circle);

  if (labelTitle) {
    const labelStyles = "text-indigo-300 pl-3 pr-2 first:pl-0";
    const label = HTML("label", labelStyles, "", labelTitle, { for: inputID });

    wrapper.append(label, toggle);
  } else {
    wrapper.append(toggle);
  }

  toggle.onclick = () => {
    if (checkbox.getAttribute("checked") === "") {
      checkbox.removeAttribute("checked");
      toggle.classList.replace("justify-end", "justify-start");
      toggle.classList.replace("bg-indigo-600", "bg-indigo-950");
      toggle.classList.add("opacity-75");
    } else {
      checkbox.setAttribute("checked", "");
      toggle.classList.replace("justify-start", "justify-end");
      toggle.classList.replace("bg-indigo-950", "bg-indigo-600");
      toggle.classList.remove("opacity-75");
    }

    callback(checkbox);
  };

  return wrapper;
}
