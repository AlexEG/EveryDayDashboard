import HTML from "../../../../../components/HTML/HTML";
import ListComponent from "./ListComponent";

export default function ListsContainer(listType: "ANIME" | "MANGA") {
  const styles =
    "w-full max-w-5xl h-full mx-auto col-start-2 col-end-3 row-start-2 row-end-4 px-6";
  const listsContainer = HTML("section", styles);

  const listDataJSON = new Promise((res, rej) => {
    res(
      JSON.parse(
        window.DATA.getJSONFileData(
          `dashboards/anilist/${listType.toLowerCase()}-list-data`
        )
      )
    );
  });

  listDataJSON.then((data) => {
    // console.log(
    //   `%c JSON  ${listType}  ListData: `,
    //   "background:black;color:white",
    //   data
    // );
    // listName => Completed | Dropped | Watching | Reading
    for (const [listName, listData] of Object.entries(data.data)) {
      listsContainer.append(ListComponent(listType, listName, listData));
    }
  });
  return listsContainer;
}
