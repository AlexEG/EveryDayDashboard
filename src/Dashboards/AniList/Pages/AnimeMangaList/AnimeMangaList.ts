import HTML from "../../../../components/HTML/HTML";
import Filter from "./Filter/Filter";
import GridListToggleLayoutBtns from "./GridListToggleLayoutBtns/GridListToggleLayoutBtns";
import Lists from "./Lists/ListsContainer";

export default function AnimeMangaList(listType: "ANIME" | "MANGA") {
  const styles =
    "w-full grid grid-cols-[17rem_1fr_7rem] grid-rows-[2.5rem_24rem_1fr] select-none";

  const mainContainerID = `anilist--${listType.toLowerCase()}-list`;
  const mainContainer = HTML("section", styles, mainContainerID);

  mainContainer.append(
    Filter(),
    Lists(listType),
    GridListToggleLayoutBtns(mainContainerID)
  );
  return mainContainer;
}
