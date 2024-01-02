import HTML from "../../../../components/HTML/HTML";
import ToggleViewBtn from "./ToggleViewBtn";

export default function GridListToggleLayoutBtns() {
  const styles =
    "w-fit border border-rose-600 rounded-lg px-4 ml-auto flex gap-4 justify-around absolute right-0 top-[3px] bottom-[3px]";
  const btnsContainer = HTML(
    "div",
    styles,
    `grid-list-layout-btns`
  );

  btnsContainer.append(
    ToggleViewBtn("list-with-img", true),
    ToggleViewBtn("list", false),
    ToggleViewBtn("grid", false)
  );
  return btnsContainer;
}
