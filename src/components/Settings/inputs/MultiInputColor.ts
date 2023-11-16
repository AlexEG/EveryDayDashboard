import HTML from "../../HTML/HTML";

export default function MultiInputColor() {
  const styles = "w-7 h-7 bg-transparent cursor-pointer";

  function inputColor(name: string, value: string) {
    return HTML("input", styles, "color-input", "", {
      type: "color",
      name: name,
      value: value,
    }) as HTMLInputElement;
  }

  const styles2 = "w-fit h-10 px-2 flex items-center justify-center gap-x-1";
  const colorPickerContainer = HTML("div", styles2);

  colorPickerContainer.append(
    inputColor("name1", "#f55090"),
    inputColor("name2", "#654600"),
    inputColor("name3", "#a55bc4"),
    inputColor("name4", "#33ff33")
  );

  return colorPickerContainer;
}
