import HTML from "../../../components/HTML/HTML";
import Filter from "./Filter/Filter";
import GridListToggleLayoutBtns from "./GridListToggleLayoutBtns/GridListToggleLayoutBtns";
export default function AnimeList() {
  const styles = "w-full border flex";
  const mainContainer = HTML("section", styles, "anilist--anime-list");

  mainContainer.append(Filter(), GridListToggleLayoutBtns());
  return mainContainer;
}
