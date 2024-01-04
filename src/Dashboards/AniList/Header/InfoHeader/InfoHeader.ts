import HTML from "../../../../components/HTML/HTML";
import CoverImg from "./CoverImg";
import InfoBanner from "./InfoBanner";



export default function InfoHeader(type: "ANIME" | "MANGA") {
  const styles = "h-28 relative pt-8"
  const infoBanner = HTML("div", styles, `anilist--info-header-${type.toLowerCase()}`)

  const styles2 = "text-rose-50 absolute top-4 left-44 font-semibold drop-shadow-[0_0_5px_rgb(225,29,72,0.3)]"
  const animeTitle = HTML("h1", styles2, `anilist--info-header-${type.toLowerCase()}--${type.toLowerCase()}-title`, "???")


  infoBanner.append(CoverImg(type), animeTitle, InfoBanner(type))
  return infoBanner
}
