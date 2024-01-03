
import HTML from "../../../../components/HTML/HTML";
import InfoBadge from "./InfoBadge";

export default function InfoBanner() {
  const styles = " border-rose-800 rounded-xl p-4 col-start-2 h-full w-fit ml-auto flex gap-1 flex-wrap"
  const infoBanner = HTML("div", styles, "anilist--info-header--info-banner")

  infoBanner.append(InfoBadge("Popularity"), InfoBadge("Average Score"), InfoBadge("Status"))
  return infoBanner
}
