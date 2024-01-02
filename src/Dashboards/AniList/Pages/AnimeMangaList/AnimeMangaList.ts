import HTML from "../../../../components/HTML/HTML";
import Filter from "./Filter/Filter";
import GridListToggleLayoutBtns from "../../NavBar/GridListToggleLayoutBtns/GridListToggleLayoutBtns";
import Lists from "./Lists/ListsContainer";

export default function AnimeMangaList(listType: "ANIME" | "MANGA") {
  const styles =
    "w-full grid grid-cols-[13rem_1fr] grid-rows-[24rem_1fr] select-none";

  const mainContainerID = `anilist--${listType.toLowerCase()}-list`;
  const mainContainer = HTML("section", styles, mainContainerID);

  mainContainer.append(
    Filter(),
    Lists(listType),
    // GridListToggleLayoutBtns(mainContainerID)
  );
  return mainContainer;
}
