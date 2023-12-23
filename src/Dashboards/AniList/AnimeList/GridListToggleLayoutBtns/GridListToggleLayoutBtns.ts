import HTML from "../../../../components/HTML/HTML";
import ToggleViewBtn from "./ToggleViewBtn";

export default function GridListToggleLayoutBtns() {
  const styles =
    "h-fit border border-rose-600 rounded-lg p-2 ml-auto flex gap-2";
  const btnsContainer = HTML(
    "div",
    styles,
    "anilist--anime-list--grid-list-layout-btns"
  );

  btnsContainer.append(
    ToggleViewBtn("list-with-img", true),
    ToggleViewBtn("list", false),
    ToggleViewBtn("grid", false)
  );
  return btnsContainer;
}
