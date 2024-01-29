import HTML from "../../HTML/HTML";

export default function MultiInputColor(
  dashboardName: string,
  [svgColor, backgroundColor, svgColorHover, backgroundColorHover]: string[],
) {
  const styles = "w-7 h-7 bg-transparent cursor-pointer";

  function inputColor(id: string, value: string, title: string) {
    return HTML("input", styles, id, "", {
      type: "color",
      value: value,
      title: title,
    }) as HTMLInputElement;
  }

  const styles2 = "w-fit h-10 px-2 flex items-center justify-center gap-x-1";
  const colorPickerContainer = HTML("div", styles2);

  colorPickerContainer.append(
    inputColor(
      `settings--sidebar--theme-display-order--${dashboardName}--svg-color`,
      svgColor,
      "SVG color",
    ),
    inputColor(
      `settings--sidebar--theme-display-order--${dashboardName}--background-color`,
      backgroundColor,
      "background color",
    ),
    inputColor(
      `settings--sidebar--theme-display-order--${dashboardName}--svg-color-hover`,
      svgColorHover,
      "SVG color (hover)",
    ),
    inputColor(
      `settings--sidebar--theme-display-order--${dashboardName}--background-color-hover`,
      backgroundColorHover,
      "background color (hover)",
    ),
  );

  return colorPickerContainer;
}
