import HTML from "../../../../components/HTML/HTML";
import Filter from "./Filter/Filter";
import Lists from "./Lists/ListsContainer";

export default function AnimeMangaList(listType: "ANIME" | "MANGA", filterIsOpenByDefault: boolean) {
  const styles =
    "w-full flex select-none";

  const mainContainerID = `anilist--${listType.toLowerCase()}-list`;
  const mainContainer = HTML("section", styles, mainContainerID);

  mainContainer.append(
    Filter(filterIsOpenByDefault),
    Lists(listType),
  );
  return mainContainer;
}
