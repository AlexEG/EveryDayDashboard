
import HTML from "../../../../components/HTML/HTML";
import InfoBadge from "./InfoBadge";

export default function InfoBanner(type: "ANIME" | "MANGA") {
  const styles = " border-rose-800 rounded-xl pr-4 pt-5 col-start-2 h-full w-fit ml-auto"
  const infoBanner = HTML("div", styles, "anilist--info-header-anime--info-banner")

  const styles2 = "flex gap-1 mb-1 justify-end"
  const badgesWrapper = HTML("div", styles2)

  if (type === "ANIME")
    badgesWrapper.append(InfoBadge("anime", "Popularity"), InfoBadge("anime", "Average Score"), InfoBadge("anime", "Status"), InfoBadge("anime", "Episodes"), InfoBadge("anime", "Season"), InfoBadge("anime", "Start Date"), InfoBadge("anime", "End Date"))

  if (type === "MANGA")
    badgesWrapper.append(InfoBadge("manga", "Popularity"), InfoBadge("manga", "Average Score"), InfoBadge("manga", "Status"), InfoBadge("manga", "Volumes"), InfoBadge("manga", "Chapters"), InfoBadge("manga", "Start Date"), InfoBadge("manga", "End Date"), InfoBadge("manga", "Source"))

  const genresWrapper = HTML("div", "w-fit ml-auto")
  genresWrapper.append(InfoBadge(type.toLowerCase() as "anime" | "manga", "Genres"))

  infoBanner.append(badgesWrapper, genresWrapper)
  return infoBanner
}
