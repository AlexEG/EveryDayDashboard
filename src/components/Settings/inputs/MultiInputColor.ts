import HTML from "../../HTML/HTML";

export default function MultiInputColor(
  dashboardName: string,
  [svgColor, backgroundColor, svgColorHover, backgroundColorHover]: string[]
) {
  const styles = "w-7 h-7 bg-transparent cursor-pointer";

  function inputColor(id: string, value: string) {
    return HTML("input", styles, id, "", {
      type: "color",
      value: value,
    }) as HTMLInputElement;
  }

  const styles2 = "w-fit h-10 px-2 flex items-center justify-center gap-x-1";
  const colorPickerContainer = HTML("div", styles2);

  colorPickerContainer.append(
    inputColor(
      `settings--sidebar--theme-display-order--${dashboardName}--svg-color`,
      svgColor
    ),
    inputColor(
      `settings--sidebar--theme-display-order--${dashboardName}--background-color`,
      backgroundColor
    ),
    inputColor(
      `settings--sidebar--theme-display-order--${dashboardName}--svg-color-hover`,
      svgColorHover
    ),
    inputColor(
      `settings--sidebar--theme-display-order--${dashboardName}--background-color-hover`,
      backgroundColorHover
    )
  );

  return colorPickerContainer;
}
