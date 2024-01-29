import HTML from "../../../../../components/HTML/HTML";

export default function ListItem(
  listType: "ANIME" | "MANGA",
  coverFileName: string,
  Title: string,
  Score: string,
  ProgressChapter: string,
  TypeVolumes: string,
  itemStylesTheme: string,
) {
  const styles = `w-full h-14 rounded-lg grid grid-cols-[3.5rem_1fr_6rem_6rem_6rem] gap-x-2 font-medium leading-[3.4rem] text-center ${
    itemStylesTheme || "text-white hover:bg-white/50"
  }`;
  const listItme = HTML("div", styles);

  const coverImg = HTML("div", "h-14 cursor-pointer");
  const styles2 = "object-cover w-full h-full rounded";
  const img = HTML("img", styles2, "", "", {
    src: `/DATA/dashboards/anilist/media/${listType.toLowerCase()}/cover-image/large/${coverFileName}`,
  });
  coverImg.append(img);

  const styles3 =
    "text-left pl-2 h-fit leading-none whitespace-nowrap truncate select-text selection:bg-white selection:text-black self-center";

  const title = HTML("span", styles3, "", Title);
  const score = HTML("p", "", "", Score);
  const progressChapter = HTML("p", "", "", ProgressChapter);
  const typeVolumes = HTML("p", "", "", TypeVolumes);

  listItme.append(coverImg, title, score, progressChapter, typeVolumes);
  return listItme;
}
