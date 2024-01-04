
import HTML from "../../../../components/HTML/HTML";
import InfoBadge from "./InfoBadge";

export default function InfoBanner() {
  const styles = "border border-rose-800 rounded-xl p-4 col-start-2 h-full w-fit ml-auto"
  const infoBanner = HTML("div", styles, "anilist--info-header--info-banner")

  const styles2 = "flex gap-1 mb-1 justify-end"
  const badgesWrapper = HTML("div", styles2)
  badgesWrapper.append(InfoBadge("Popularity"), InfoBadge("Average Score"), InfoBadge("Status"), InfoBadge("Episodes"), InfoBadge("Season"))


  const genresWrapper = HTML("div", "w-fit ml-auto")
  genresWrapper.append(InfoBadge("Genres"))

  infoBanner.append(badgesWrapper, genresWrapper)
  return infoBanner
}
