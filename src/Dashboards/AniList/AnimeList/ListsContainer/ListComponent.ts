import HTML from "../../../../components/HTML/HTML";
import AnimeComponent from "./AnimeComponent";

export default function ListComponent(listName: string, listData: any) {
  const ListComponent = HTML("div", "mb-8");

  const styles = "text-rose-100 font-bold text-lg mb-1 pl-4";
  const listTitle = HTML("div", "flex  gap-x-1");
  const h2 = HTML("h2", styles, "", listName);

  const styles2 =
    "rounded-full w-5 h-5 text-xs border border-rose-600 text-rose-50 text-center drop-shadow-[0_0_5px_rgb(225,29,72,0.3)]";
  const span = HTML("span", styles2, "", String(listData.length));
  listTitle.append(h2, span);

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
  ListComponent.append(listTitle, listItemWrapper);
  return ListComponent;
}
