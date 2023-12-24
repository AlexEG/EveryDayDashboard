import HTML from "../../../../components/HTML/HTML";

export default function AnimeComponent(
  coverFileName: string,
  Title: string,
  Score: string,
  Progress: string,
  Type: string
) {
  const styles =
    "w-full h-14 hover:bg-rose-600/25 rounded-lg grid grid-cols-[3.5rem_3fr_1fr_1fr_1fr] gap-x-2 font-medium leading-[3.4rem] text-rose-100 text-center";
  const animeComponent = HTML("div", styles);

  const animeCoverImg = HTML("div", "h-14");
  const styles2 = "object-cover w-full h-full rounded";
  const img = HTML("img", styles2, "", "", {
    src: `/DATA/dashboards/anilist/media/anime/cover-image/large/${coverFileName}`,
  });
  animeCoverImg.append(img);

  const styles3 =
    "text-left pl-2 whitespace-nowrap truncate select-text selection:bg-rose-100 selection:text-rose-900";

  const title = HTML("p", styles3, "", Title);
  const score = HTML("p", "", "", Score);
  const progress = HTML("p", "", "", Progress);
  const type = HTML("p", "", "", Type);

  animeComponent.append(animeCoverImg, title, score, progress, type);
  return animeComponent;
}
