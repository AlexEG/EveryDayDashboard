import { animeHeaderInfoBannerTypes, mangaHeaderInfoBannerTypes } from "../../type";
import animeMangaFavouritesArrayIdJSON from "./animeMangaFavouritesArrayIdJSON";
import ListHeaderDataJSON from "./ListHeaderDataJSON";



export default function switchHeaderAnimeManga(type: "anime" | "manga", autoSwitchBanner: boolean, isAutoSwitchBannerRandomly: boolean, switchingSpeed: number, infoBanner: animeHeaderInfoBannerTypes | mangaHeaderInfoBannerTypes, seasonWithYear?: boolean) {
  let favouritesAnimeMangaArrayID: number[]

  animeMangaFavouritesArrayIdJSON().then((data: { data: { anime: number[], manga: number[] } }) => {
    // console.log("animeFavouritesArrayIdJSON: ", data)
    if (type === "anime") favouritesAnimeMangaArrayID = data.data.anime
    if (type === "manga") favouritesAnimeMangaArrayID = data.data.manga
    // console.log("favouritesAnimeArrayID: ", favouritesAnimeArrayID)

    ListHeaderDataJSON(type).then((data: any) => {
      // console.log("animeListHeaderDataJSON: ", data);

      const numberOfAnime = data.data.metadata.size
      const animeHeaderData = data.data.data
      // console.log("numberOfAnime: ", numberOfAnime);
      // console.log("animeHeaderData: ", animeHeaderData);

      const getRandom = () => {
        const randomNum = Math.floor(Math.random() * numberOfAnime)
        const randomAnime = animeHeaderData[randomNum]
        return randomAnime
      }

      let orderNum = 1
      const getOrder = () => {
        const randomAnime = animeHeaderData[orderNum]
        orderNum++
        return randomAnime
      }



      let animeRandomSwtich: NodeJS.Timeout
      if (autoSwitchBanner) {
        animeRandomSwtich = setInterval(changeBannerImgSrc, switchingSpeed)
      }

      function changeBannerImgSrc() {
        // to stop setInterval when switching to other tab
        const isAnimeHeaderThere = Boolean(document.querySelector(`header#anilist--header-${type}`))
        if (!isAnimeHeaderThere) clearInterval(animeRandomSwtich)

        ///////
        if (isAnimeHeaderThere) {

          const headerData = isAutoSwitchBannerRandomly ? getRandom() : getOrder()
          // console.log(getRandom())
          const bannerImgFileName: string = headerData.bannerImgFileName
          const coverImgFileName: string = headerData.coverImgFileName
          const popularity: number = headerData.popularity
          const averageScore: number = headerData.averageScore
          const status: string = headerData.status
          const genres: string[] = headerData.genres
          const title: string = headerData.title
          const episodes: number = headerData.episodes
          const season: string = headerData.season
          const volumes: string = headerData.volumes
          const chapters: string = headerData.chapters
          const source: string = headerData.source
          const id: number = headerData.id
          const isFavourite: boolean = favouritesAnimeMangaArrayID.includes(id)
          const startDate: string = headerData.startDate
          const endDate: string = headerData.endDate


          // console.log("bannerImgFileName: ", bannerImgFileName);
          // console.log("popularity: ", popularity);
          // console.log("isFavourite: ", isFavourite);
          // console.log("id: ", id);
          // console.log("startDate: ", startDate);
          // console.log("endDate: ", endDate);

          if (bannerImgFileName) document.querySelector(`img#anilist--header-${type}--banner--image`).setAttribute("src", `/DATA/dashboards/anilist/media/${type}/banner/${bannerImgFileName}`)
          else document.querySelector(`img#anilist--header-${type}--banner--image`).setAttribute("src", `/DATA/dashboards/anilist/media/${type}/cover-image/large/${coverImgFileName}`)

          // cover
          document.querySelector(`img#anilist--header-${type}--info-banner--cover-image`).setAttribute("src", `/DATA/dashboards/anilist/media/${type}/cover-image/large/${coverImgFileName}`)

          // title
          const animeMangaTitle = document.querySelector(`h1#anilist--header-${type}--info-banner--title`) as HTMLHeadingElement
          animeMangaTitle.innerText = title


          // isFavourite
          const isFavouriteSVG = document.querySelector(`img#anilist--header-${type}--banner--is-favourite`) as HTMLImageElement
          if (isFavourite && isFavouriteSVG.classList.contains("hidden")) isFavouriteSVG.classList.remove("hidden")
          if (!isFavourite && !isFavouriteSVG.classList.contains("hidden")) isFavouriteSVG.classList.add("hidden")


          if (infoBanner.popularity) {
            const popularityBadge = document.querySelector(`span#anilist--header-${type}--info-banner--popularity-badge`) as HTMLSpanElement
            popularityBadge.innerText = String(popularity)
          }


          if (infoBanner.averageScore) {
            const averageScoreBadge = document.querySelector(`span#anilist--header-${type}--info-banner--average-score-badge`) as HTMLSpanElement
            averageScoreBadge.innerText = `${averageScore}%`
          }


          if (infoBanner.status) {
            const statusBadge = document.querySelector(`span#anilist--header-${type}--info-banner--status-badge`) as HTMLSpanElement
            statusBadge.innerText = status
          }


          if (infoBanner.genres) {
            const genresBadge = document.querySelector(`span#anilist--header-${type}--info-banner--genres-badge`) as HTMLSpanElement
            genresBadge.innerText = genres.join(" • ")
          }


          if (infoBanner.startDate) {
            const startDateBadge = document.querySelector(`span#anilist--header-${type}--info-banner--start-date-badge`) as HTMLSpanElement
            startDateBadge.innerText = startDate
          }


          if (infoBanner.endDate) {
            const endDateBadge = document.querySelector(`span#anilist--header-${type}--info-banner--end-date-badge`) as HTMLSpanElement
            endDateBadge.innerText = endDate
          }


          if (type === "anime") {

            const { episodes: Ep, season: Se } = infoBanner as animeHeaderInfoBannerTypes
            if (Ep) {
              const episodesBadge = document.querySelector(`span#anilist--header-${type}--info-banner--episodes-badge`) as HTMLSpanElement
              episodesBadge.innerText = `\u00a0${episodes}\u00a0`
            }

            if (Se) {
              const seasonBadge = document.querySelector(`span#anilist--header-${type}--info-banner--season-badge`) as HTMLSpanElement
              if (seasonWithYear) seasonBadge.innerText = `${season} ${startDate.split(" ")[2]}`
              else seasonBadge.innerText = season
            }

          }


          if (type === "manga") {

            const { volumes: Vol, chapters: Ch, source: So } = infoBanner as mangaHeaderInfoBannerTypes

            if (Vol) {
              const volumesBadge = document.querySelector("span#anilist--header-manga--info-banner--volumes-badge") as HTMLSpanElement
              volumesBadge.innerText = `\u00a0${volumes || "??"}\u00a0`
            }

            if (Ch) {
              const chaptersBadge = document.querySelector("span#anilist--header-manga--info-banner--chapters-badge") as HTMLSpanElement
              chaptersBadge.innerText = `\u00a0${chapters || "??"}\u00a0`
            }

            if (So) {
              const sourceBadge = document.querySelector("span#anilist--header-manga--info-banner--source-badge") as HTMLSpanElement
              sourceBadge.innerText = source
            }

          }


          // LOG
          console.log(
            `%c SWITCH ${type} %c{%c ${title} %c} `,
            "background:black; color:#0f0; font-weight:900",
            "background:black; color:white",
            "background:black; color:#c7f; font-weight:700; font-family: Arial",
            "background:black; color:white"
          );


        }
      }
      changeBannerImgSrc()

    }); // end of the main function "animeListHeaderDataJSON"
  }) // end of getting anime arr id from json "animeFavouritesArrayIdJSON"

}
