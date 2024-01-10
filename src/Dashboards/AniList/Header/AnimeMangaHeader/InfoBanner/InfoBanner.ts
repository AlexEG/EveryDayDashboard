import { animeHeaderInfoBannerTypes, mangaHeaderInfoBannerTypes } from "../../../type";
import HTML from "../../../../../components/HTML/HTML";
import CoverImg from "./CoverImg";
import InfoBadge from "./InfoBadge";


export default function InfoBanner(type: "ANIME" | "MANGA", animeMangaHeaderInfoBannerSettings: animeHeaderInfoBannerTypes | mangaHeaderInfoBannerTypes) {

  const styles = "h-28 relative pt-8 pl-44"
  const infoBannerID = `anilist--header-${type.toLowerCase()}--info-banner`
  const infoBanner = HTML("div", styles, infoBannerID)

  const styles2 = "text-rose-50 absolute top-4 left-44 font-semibold drop-shadow-[0_0_5px_rgb(225,29,72,0.3)]"
  const animeTitle = HTML("h1", styles2, `${infoBannerID}--title`, "???")

  const styles3 = "border-rose-800 rounded-xl pr-4 pt-5 h-full w-fit ml-auto"
  const badgesContainer = HTML("div", styles3)

  const styles4 = "flex flex-wrap justify-end gap-1 mb-1"
  const badgesWrapper = HTML("div", styles4)

  const genresWrapper = HTML("div", "w-fit ml-auto")

  if (type === "ANIME") {

    const { popularity, averageScore, status, episodes, season, source, startDate, endDate, genres } = animeMangaHeaderInfoBannerSettings as animeHeaderInfoBannerTypes

    if (popularity) badgesWrapper.append(InfoBadge("anime", "Popularity"))
    if (averageScore) badgesWrapper.append(InfoBadge("anime", "Average Score"))
    if (status) badgesWrapper.append(InfoBadge("anime", "Status"))
    if (episodes) badgesWrapper.append(InfoBadge("anime", "Episodes"))
    if (season) badgesWrapper.append(InfoBadge("anime", "Season"))
    if (source) badgesWrapper.append(InfoBadge("anime", "Source"))
    if (startDate) badgesWrapper.append(InfoBadge("anime", "Start Date"))
    if (endDate) badgesWrapper.append(InfoBadge("anime", "End Date"))
    if (genres) genresWrapper.append(InfoBadge("anime", "Genres"))

  }


  if (type === "MANGA") {

    const { popularity, averageScore, status, volumes, chapters, source, startDate, endDate, genres } = animeMangaHeaderInfoBannerSettings as mangaHeaderInfoBannerTypes

    if (popularity) badgesWrapper.append(InfoBadge("manga", "Popularity"))
    if (averageScore) badgesWrapper.append(InfoBadge("manga", "Average Score"))
    if (status) badgesWrapper.append(InfoBadge("manga", "Status"))
    if (volumes) badgesWrapper.append(InfoBadge("manga", "Volumes"))
    if (chapters) badgesWrapper.append(InfoBadge("manga", "Chapters"))
    if (source) badgesWrapper.append(InfoBadge("manga", "Source"))
    if (startDate) badgesWrapper.append(InfoBadge("manga", "Start Date"))
    if (endDate) badgesWrapper.append(InfoBadge("manga", "End Date"))
    if (genres) genresWrapper.append(InfoBadge("manga", "Genres"))

  }





  badgesContainer.append(badgesWrapper, genresWrapper)
  infoBanner.append(CoverImg(type), animeTitle, badgesContainer)
  return infoBanner
}
