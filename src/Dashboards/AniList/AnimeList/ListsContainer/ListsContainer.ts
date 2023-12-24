import HTML from "../../../../components/HTML/HTML";
import ListComponent from "./ListComponent";

export default function ListsContainer() {
  const styles =
    "w-full max-w-5xl h-full mx-auto col-start-2 col-end-3 row-start-2 row-end-4 px-6";
  const listsContainer = HTML("section", styles);

  const animeListDataJSON = new Promise((res, rej) => {
    res(
      JSON.parse(
        window.DATA.getJSONFileData("dashboards/anilist/anime-list-data")
      )
    );
  });

  animeListDataJSON.then((data) => {
    console.log("API animeListDataJSON: ", data);
    for (const [listName, listData] of Object.entries(data.data)) {
      listsContainer.append(ListComponent(listName, listData));
    }
  });
  return listsContainer;
}
