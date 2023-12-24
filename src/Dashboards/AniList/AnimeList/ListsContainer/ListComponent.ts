import HTML from "../../../../components/HTML/HTML";
import AnimeComponent from "./AnimeComponent";

export default function ListComponent(listName: string, listData: any) {
  const styles = "mb-8";
  const ListComponent = HTML("div", styles);

  const styles2 = "text-rose-100 font-bold text-lg mb-1 pl-4";
  const h2 = HTML("h2", styles2, "", listName);

  const styles3 = "border border-rose-600 rounded-lg p-2 flex flex-col gap-2";
  const listItemWrapper = HTML("div", styles3);

  const styles4 =
    "w-full h-10 grid grid-cols-[3.5rem_3fr_1fr_1fr_1fr] gap-x-2 leading-9 text-rose-100 text-center font-medium ";
  const listHeadRow = HTML("div", styles4);

  const title = HTML("p", "text-left col-start-2", "", "Title");
  const score = HTML("p", "", "", "Score");
  const progress = HTML("p", "", "", "Progress");
  const type = HTML("p", "", "", "Type");

  listHeadRow.append(title, score, progress, type);
  listItemWrapper.append(listHeadRow);

  for (const animeInfo of listData) {
    const imgURL = animeInfo.media.coverImage.large;
    const imgFileName = String(imgURL.match(/(?<=medium\/).*/g));

    const titleUserPreferred = animeInfo.media.title.userPreferred;
    const titleEnglish = animeInfo.media.title.english;

    const title = titleEnglish ? titleEnglish : titleUserPreferred;
    const progress = `${animeInfo.progress}/${animeInfo.media.episodes}`;
    const score = animeInfo.score;
    const type = animeInfo.media.format;

    listItemWrapper.append(
      AnimeComponent(imgFileName, title, score, progress, type)
    );
  }
  ListComponent.append(h2, listItemWrapper);
  return ListComponent;
}
