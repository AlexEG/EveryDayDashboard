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
      const imgURL = listItem.media.coverImage.large;
      const imgFileName = String(imgURL.match(/(?<=medium\/).*/g));

      const titleUserPreferred = listItem.media.title.userPreferred;
      const titleEnglish = listItem.media.title.english;

      const title = titleEnglish ? titleEnglish : titleUserPreferred;
      const progress = `${listItem.progress}/${listItem.media.episodes}`;
      const score = listItem.score;
      const type = listItem.media.format;

      listItemWrapper.append(
        ListItem(listType, imgFileName, title, score, progress, type)
      );
    }
  } else {
    for (const listItem of listData) {
      const imgURL = listItem.media.coverImage.large;
      const imgFileName = String(imgURL.match(/(?<=medium\/).*/g));

      const titleUserPreferred = listItem.media.title.userPreferred;
      const titleEnglish = listItem.media.title.english;

      const title = titleEnglish ? titleEnglish : titleUserPreferred;
      const chapters = `${listItem.progress}/${listItem.media.chapters || ""}`;
      const score = listItem.score;
      const volumes = `${listItem.progressVolumes}/${
        listItem.media.volumes || ""
      }`;
      listItemWrapper.append(
        ListItem(listType, imgFileName, title, score, chapters, volumes)
      );
    }
  }

  ListComponent.append(ListTitle(listName, listData.length), listItemWrapper);
  return ListComponent;
}
