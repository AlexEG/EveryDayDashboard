import HTML from "../../../../../components/HTML/HTML";

export default function ListItem(
  listType: "ANIME" | "MANGA",
  coverFileName: string,
  Title: string,
  Score: string,
  ProgressChapter: string,
  TypeVolumes: string
) {
  const styles =
    "w-full h-14 hover:bg-rose-600/25 rounded-lg grid grid-cols-[3.5rem_3fr_1fr_1fr_1fr] gap-x-2 font-medium leading-[3.4rem] text-rose-100/80 text-center";
  const listItme = HTML("div", styles);

  const coverImg = HTML("div", "h-14");
  const styles2 = "object-cover w-full h-full rounded";
  const img = HTML("img", styles2, "", "", {
    src: `/DATA/dashboards/anilist/media/${listType.toLowerCase()}/cover-image/large/${coverFileName}`,
  });
  coverImg.append(img);

  const styles3 =
    "text-left pl-2 whitespace-nowrap truncate select-text selection:bg-rose-100 selection:text-rose-900 ";

  const title = HTML("p", styles3, "", Title);
  const score = HTML("p", "", "", Score);
  const progressChapter = HTML("p", "", "", ProgressChapter);
  const typeVolumes = HTML("p", "", "", TypeVolumes);

  listItme.append(coverImg, title, score, progressChapter, typeVolumes);
  return listItme;
}
