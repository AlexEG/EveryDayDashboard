import HTML from "../../HTML/HTML";

export default function ColorInput(
  name: string,
  label: string,
  value: string,
  callback: any
) {
  const styles = "w-7 h-7 bg-transparent cursor-pointer";

  const colorPicker = HTML("input", styles, name, "", {
    type: "color",
    name: name,
    value: value,
  }) as HTMLInputElement;

  const labelStyles = "text-indigo-300 pl-3 pr-1 first:pl-0";
  const inputLabel = HTML("label", labelStyles, "", label, { for: name });

  const wrapper = HTML("div", "flex items-center");
  wrapper.append(inputLabel, colorPicker);

  colorPicker.onchange = () => {
    colorPicker.setAttribute("value", colorPicker.value);
    callback(colorPicker);
  };
  return wrapper;
}
