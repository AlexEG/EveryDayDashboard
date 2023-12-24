import HTML from "../../../../../components/HTML/HTML";
import ToggleViewBtn from "./ToggleViewBtn";

export default function GridListToggleLayoutBtns(mainContainerID: string) {
  const styles =
    "h-full w-full border border-rose-600 rounded-lg p-2 ml-auto flex gap-2 justify-around col-start-3 col-end-4 row-start-1 row-end-2";
  const btnsContainer = HTML(
    "div",
    styles,
    `${mainContainerID}--grid-list-layout-btns`
  );

  btnsContainer.append(
    ToggleViewBtn("list-with-img", true),
    ToggleViewBtn("list", false),
    ToggleViewBtn("grid", false)
  );
  return btnsContainer;
}
