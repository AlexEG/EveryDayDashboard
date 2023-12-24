import HTML from "../../../components/HTML/HTML";
import Filter from "./Filter/Filter";
import GridListToggleLayoutBtns from "./GridListToggleLayoutBtns/GridListToggleLayoutBtns";
import ListsContainer from "./ListsContainer/ListsContainer";

export default function AnimeList() {
  const styles =
    "w-full grid grid-cols-[17rem_1fr_7rem] grid-rows-[2.5rem_24rem_1fr] select-none";
  const mainContainer = HTML("section", styles, "anilist--anime-list");

  mainContainer.append(Filter(), ListsContainer(), GridListToggleLayoutBtns());
  return mainContainer;
}
