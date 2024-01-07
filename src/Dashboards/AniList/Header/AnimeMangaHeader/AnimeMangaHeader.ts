import HTML from "../../../../components/HTML/HTML";
import { animeHeaderTypes, mangaHeaderTypes } from "../../type";
import InfoBanner from "./InfoBanner/InfoBanner";
import switchHeaderAnimeManga from "./switchHeaderAnimeManga";

export default function AnimeMangaHeader(type: "ANIME" | "MANGA", animeMangaHeaderSettings: animeHeaderTypes | mangaHeaderTypes) {

  const styles = "border"
  const headerID = `anilist--header-${type.toLowerCase()}`
  const header = HTML("header", styles, headerID);

  const styles2 =
    "border w-full h-56 relative rounded-lg overflow-hidden drop-shadow-[0_0_10px_rgb(225,29,72,0.5)]";
  const banner = HTML("div", styles2, `${headerID}--banner`);


  const styles3 = "absolute top-2 right-2 w-6 h-6 z-10 brightness-125 drop-shadow-[0_0_6px_rgb(0,0,0,0.3)] hidden"
  const isFavourite = HTML("img", styles3, `${headerID}--banner--is-favourite`, "", { src: "/src/assets/heart.svg" })



  const bannerImg = HTML(
    "img",
    "object-cover object-center w-full h-full",
    `${headerID}--banner--image`,
  );


  if (type === "ANIME") {
    const { autoSwitchBanner, isAutoSwitchBannerRandomly, switchingSpeed, infoBanner, seasonWithYear } = animeMangaHeaderSettings as animeHeaderTypes
    switchHeaderAnimeManga("anime", autoSwitchBanner, isAutoSwitchBannerRandomly, switchingSpeed, infoBanner, seasonWithYear)
  }

  if (type === "MANGA") {
    const { autoSwitchBanner, isAutoSwitchBannerRandomly, switchingSpeed, infoBanner } = animeMangaHeaderSettings as mangaHeaderTypes
    switchHeaderAnimeManga("manga", autoSwitchBanner, isAutoSwitchBannerRandomly, switchingSpeed, infoBanner)
  }



  banner.append(bannerImg, isFavourite);
  header.append(banner)
  if (animeMangaHeaderSettings.isInfoHeaderEnabled) header.append(InfoBanner(type, animeMangaHeaderSettings.infoBanner))
  return header;
}
