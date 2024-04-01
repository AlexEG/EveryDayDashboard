import HTML from "../../../../../components/HTML/HTML";
import ListComponent from "./ListComponent";

export default function ListsContainer(
  listType: "ANIME" | "MANGA",
  allLists: any,
  listsTheme: {
    containerBorderColor: string;
    listTitle: {
      textColor: string;
      numberOfItemsCircle: string;
    };
    listHeadRowTextColor: string;
    itemStyles: string;
  },
) {
  const styles =
    "w-full max-w-5xl h-full mx-auto col-start-2 col-end-3 row-span-full px-6";
  const listsContainer = HTML("section", styles);

  // listName => Completed | Dropped | Watching | Reading
  for (const [listName, listData] of Object.entries(allLists)) {
    listsContainer.append(
      ListComponent(listType, listName, listData, listsTheme),
    );
  }

  return listsContainer;
}
