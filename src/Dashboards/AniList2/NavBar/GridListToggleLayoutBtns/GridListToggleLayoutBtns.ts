import HTML from "../../../../components/HTML/HTML";
import ToggleViewBtn from "./ToggleViewBtn";

export default function GridListToggleLayoutBtns(gridListToggleLayoutTheme: {
  containerBorderColor: string;
  isSelectedStyles: string;
}) {
  const styles = `w-fit border rounded-lg px-4 ml-auto flex gap-4 justify-around absolute right-0 top-[3px] bottom-[3px] ${gridListToggleLayoutTheme.containerBorderColor}`;
  const btnsContainer = HTML("div", styles, `grid-list-layout-btns`);

  btnsContainer.append(
    ToggleViewBtn(
      "list-with-img",
      true,
      gridListToggleLayoutTheme.isSelectedStyles,
    ),
    ToggleViewBtn("list", false, gridListToggleLayoutTheme.isSelectedStyles),
    ToggleViewBtn("grid", false, gridListToggleLayoutTheme.isSelectedStyles),
  );
  return btnsContainer;
}
