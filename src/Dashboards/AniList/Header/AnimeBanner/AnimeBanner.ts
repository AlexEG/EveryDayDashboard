import HTML from "../../../../components/HTML/HTML";
import switchRandomAnime from "./switchRandomAnime";

export default function AnimeBanner() {
  const styles =
    "w-full h-56 relative rounded-lg overflow-hidden drop-shadow-[0_0_10px_rgb(225,29,72,0.5)]";
  const header = HTML("header", styles, "anilist--header-anime");


  const styles2 = "absolute top-2 right-2 w-6 h-6 z-10 brightness-125 drop-shadow-[0_0_6px_rgb(0,0,0,0.3)] hidden"
  const isFavourite = HTML("img", styles2, "anilist--header-anime--is-favourite", "", { src: "/src/assets/heart.svg" })



  const bannerImg = HTML(
    "img",
    "object-cover object-center w-full h-full",
    "anilist--header-anime--banner-image",
    "",
  );


  switchRandomAnime(true)

  header.append(bannerImg, isFavourite);
  return header;
}
