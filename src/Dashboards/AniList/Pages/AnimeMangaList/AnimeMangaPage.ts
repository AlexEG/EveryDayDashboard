import HTML from "../../../../components/HTML/HTML";
import Filter from "./Filter/Filter";
import Lists from "./Lists/ListsContainer";

type listsSettings = {
  listsOrder: Array<string>
}
export default function AnimeMangaPage(type: "ANIME" | "MANGA", animeMangaLists: listsSettings
  , filterIsOpenByDefault: boolean) {
  const styles =
    "w-full flex select-none";

  const mainContainerID = `anilist--${type.toLowerCase()}-list`;
  const mainContainer = HTML("section", styles, mainContainerID);


  const offlineData = new Promise((res, rej) => {
    res(
      JSON.parse(
        window.DATA.getJSONFileData(
          `dashboards/anilist/${type.toLowerCase()}`
        )
      )
    );
  });

  offlineData.then((offlineData: any) => {

    // const size = offlineData.data.metadata.size
    const allData = offlineData.data.data

    const allLists: any = {}
    for (const listName of animeMangaLists.listsOrder) {
      allLists[listName] = []
    }

    for (const item of allData) {
      allLists[item.ListName].push(item)
    }

    // console.log("allLists: ", allLists)

    mainContainer.append(
      Filter(filterIsOpenByDefault),
      Lists(type, allLists),
    );

  })


  return mainContainer;
}
