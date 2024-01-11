import { animeHeaderInfoBannerTypes, mangaHeaderInfoBannerTypes } from "../../type";
import animeMangaFavouritesArrayIdJSON from "./animeMangaFavouritesArrayIdJSON";
import ListHeaderDataJSON from "./ListHeaderDataJSON";



export default function switchHeaderAnimeManga(type: "anime" | "manga", autoSwitchBanner: boolean, isAutoSwitchBannerRandomly: boolean, switchingSpeed: number, infoBanner: animeHeaderInfoBannerTypes | mangaHeaderInfoBannerTypes, seasonWithYear?: boolean) {

  const animeMangaOfflineData = new Promise((res, rej) => {
    res(
      JSON.parse(
        window.DATA.getJSONFileData(`dashboards/anilist/${type}`)
      )
    );
  })



  animeMangaOfflineData.then((offlineData: any) => {
    console.log(`${type} OfflineData`, offlineData);


    const size = offlineData.data.metadata.size
    const allData = offlineData.data.data
    // console.log("numberOfAnime: ", numberOfAnime);
    // console.log("animeHeaderData: ", animeHeaderData);

    const getRandom = () => {
      const randomNum = Math.floor(Math.random() * size)
      const randomAnimeManga = allData[randomNum]
      return randomAnimeManga
    }

    let orderNum = 0
    const getNext = () => {
      if (orderNum === size) orderNum = 0
      const nextAnimeManga = allData[orderNum]
      orderNum++
      return nextAnimeManga
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

        const headerData = isAutoSwitchBannerRandomly ? getRandom() : getNext()
        // console.log(getRandom())
        // const id: number = headerData.id
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
        const isFavourite: boolean = headerData.isFavourite
        const startDate: string = headerData.startDate
        const endDate: string = headerData.endDate


        // console.log("bannerImgFileName: ", bannerImgFileName);
        // console.log("popularity: ", popularity);
        // console.log("isFavourite: ", isFavourite);
        // console.log("id: ", id);
        // console.log("startDate: ", startDate);
        // console.log("endDate: ", endDate);

        //todo try extraLarge then large  API Call + updateOfflineFunction + this file
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

        if (infoBanner.source) {
          const sourceBadge = document.querySelector(`span#anilist--header-${type}--info-banner--source-badge`) as HTMLSpanElement
          sourceBadge.innerText = source
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

          const { volumes: Vol, chapters: Ch, } = infoBanner as mangaHeaderInfoBannerTypes

          if (Vol) {
            const volumesBadge = document.querySelector("span#anilist--header-manga--info-banner--volumes-badge") as HTMLSpanElement
            volumesBadge.innerText = `\u00a0${volumes || "??"}\u00a0`
          }

          if (Ch) {
            const chaptersBadge = document.querySelector("span#anilist--header-manga--info-banner--chapters-badge") as HTMLSpanElement
            chaptersBadge.innerText = `\u00a0${chapters || "??"}\u00a0`
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

}
