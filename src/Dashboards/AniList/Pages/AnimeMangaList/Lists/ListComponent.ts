import HTML from "../../../../../components/HTML/HTML";

import ListHeadRow from "./ListHeadRow";
import ListItem from "./ListItem";
import ListTitle from "./ListTitle";

export default function ListComponent(
  listType: "ANIME" | "MANGA",
  listName: string,
  listData: any
) {
  const styles = "mb-8";
  const ListComponent = HTML("div", styles);

  const styles2 = "border border-rose-600 rounded-lg p-2 flex flex-col gap-2";
  const listItemWrapper = HTML("div", styles2);

  listItemWrapper.append(ListHeadRow(listType));

  if (listType === "ANIME") {
    for (const listItem of listData) {
      const imgFileName = listItem.coverImgFileName
      const title = listItem.title
      const progress = `${listItem.progress}/${listItem.episodes}`;
      const score = listItem.score;
      const type = listItem.format;

      listItemWrapper.append(
        ListItem(listType, imgFileName, title, score, progress, type)
      );
    }
  } else {
    for (const listItem of listData) {
      const imgFileName = listItem.coverImgFileName
      const title = listItem.title
      const chapters = `${listItem.progress}/${listItem.chapters || "??"}`;
      const score = listItem.score;
      const volumes = `${listItem.progressVolumes}/${listItem.volumes || "??"
        }`;
      listItemWrapper.append(
        ListItem(listType, imgFileName, title, score, chapters, volumes)
      );
    }
  }

  ListComponent.append(ListTitle(listName, listData.length), listItemWrapper);
  return ListComponent;
}
