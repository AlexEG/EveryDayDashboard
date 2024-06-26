import HTML from "../../../../components/HTML/HTML";
import { animeHeaderTypes, mangaHeaderTypes } from "../../type";
import InfoBanner from "./InfoBanner/InfoBanner";
import switchHeaderAnimeManga from "./switchHeaderAnimeManga";

export default function AnimeMangaHeader(
  type: "ANIME" | "MANGA",
  animeMangaHeaderSettings: animeHeaderTypes | mangaHeaderTypes,
  bannerImageDropShadow: string,
  infoBannerTheme: {
    titleColor: string;
    titleDropShadow: string;
    coverImgDropShadow: string;
  },
) {
  // const styles = "border";
  const headerID = `anilist--header-${type.toLowerCase()}`;
  // const header = HTML("header", styles, headerID);

  const header = document.createElement("header");
  {
    const className = "border";
    header.setAttribute("class", className);
    header.setAttribute("id", headerID);
  }

  const banner = document.createElement("div");
  {
    const className = `w-full h-56 relative rounded-lg overflow-hidden ${bannerImageDropShadow || "drop-shadow-[0_0_10px_#ffffff]"}`;
    banner.setAttribute("class", className);
    banner.setAttribute("id", `${headerID}--banner`);
  }

  const isFavourite = document.createElement("img");
  {
    const className =
      "absolute top-2 right-2 w-6 h-6 z-10 brightness-125 drop-shadow-[0_0_6px_rgb(0,0,0,0.3)] hidden";
    isFavourite.setAttribute("id", `${headerID}--banner--is-favourite`);
    isFavourite.setAttribute("scr", "/src/assets/heart.svg");
  }

  const bannerImg = HTML(
    "img",
    "object-cover object-center w-full h-full",
    `${headerID}--banner--image`,
  );

  if (type === "ANIME") {
    const {
      autoSwitchBanner,
      isAutoSwitchBannerRandomly,
      switchingSpeed,
      infoBanner,
      seasonWithYear,
    } = animeMangaHeaderSettings as animeHeaderTypes;
    switchHeaderAnimeManga(
      "anime",
      autoSwitchBanner,
      isAutoSwitchBannerRandomly,
      switchingSpeed,
      infoBanner,
      seasonWithYear,
    );
  }

  if (type === "MANGA") {
    const {
      autoSwitchBanner,
      isAutoSwitchBannerRandomly,
      switchingSpeed,
      infoBanner,
    } = animeMangaHeaderSettings as mangaHeaderTypes;
    switchHeaderAnimeManga(
      "manga",
      autoSwitchBanner,
      isAutoSwitchBannerRandomly,
      switchingSpeed,
      infoBanner,
    );
  }

  banner.append(bannerImg, isFavourite);
  header.append(banner);
  if (animeMangaHeaderSettings.isInfoHeaderEnabled)
    header.append(
      InfoBanner(type, animeMangaHeaderSettings.infoBanner, infoBannerTheme),
    );
  return header;
}
