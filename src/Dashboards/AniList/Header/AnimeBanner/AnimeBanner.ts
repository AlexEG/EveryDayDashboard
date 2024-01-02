import HTML from "../../../../components/HTML/HTML";
import randomBannerImg from "./randomBannerImg";

export default function AnimeBanner() {
  const styles =
    "w-full h-56 relative rounded-lg overflow-hidden drop-shadow-[0_0_10px_rgb(225,29,72,0.5)]";
  const header = HTML("header", styles, "anilist--header");





  const bannerImg = HTML(
    "img",
    "object-cover object-center w-full h-full",
    "anilist--header--banner-image",
    "",
  );


  randomBannerImg(true)

  header.append(bannerImg);
  return header;
}
