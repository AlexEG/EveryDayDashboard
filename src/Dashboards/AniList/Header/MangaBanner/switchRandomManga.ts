import animeMangaFavouritesArrayIdJSON from "../animeMangaFavouritesArrayIdJSON";
import mangaListHeaderDataJSON from "./mangaListHeaderDataJSON";




export default function switchRandomManga(allBanners: boolean) {
  let favouritesMangaArrayID: number[]


  animeMangaFavouritesArrayIdJSON().then((data: { data: { anime: number[], manga: number[] } }) => {
    // console.log("animeFavouritesArrayIdJSON: ", data)

    favouritesMangaArrayID = data.data.manga
    // console.log("favouritesMangaArrayID: ", favouritesMangaArrayID)

    mangaListHeaderDataJSON().then((data: any) => {
      // console.log("mangaListHeaderDataJSON: ", data);

      const numberOfAnime = data.data.metadata.size
      const mangaHeaderData = data.data.data
      // console.log("numberOfAnime: ", numberOfAnime);
      // console.log("animeHeaderData: ", animeHeaderData);

      const getRandom = () => {
        const randomNum = Math.floor(Math.random() * numberOfAnime)
        const randomManga = mangaHeaderData[randomNum]
        return randomManga
      }

      let mangaRandomSwtich: NodeJS.Timeout
      if (allBanners) {
        mangaRandomSwtich = setInterval(changeBannerImgSrc, 2_500)
      }

      function changeBannerImgSrc() {
        // to stop setInterval when switching to other tab
        const isAnimeHeaderThere = Boolean(document.querySelector("header#anilist--header-manga"))
        if (!isAnimeHeaderThere) clearInterval(mangaRandomSwtich)

        ///////
        if (isAnimeHeaderThere) {

          const headerData = getRandom()
          // console.log(getRandom())
          const randomBannerImg: string = headerData.bannerImgFileName
          const randomCoverImg: string = headerData.coverImgFileName
          const popularity: number = headerData.popularity
          const averageScore: number = headerData.averageScore
          const status: string = headerData.status
          const genres: string[] = headerData.genres
          const title: string = headerData.title
          const volumes: number | null = headerData.volumes
          const chapters: number | null = headerData.chapters
          const source: string = headerData.source
          const id: number = headerData.id
          const isFavourite: boolean = favouritesMangaArrayID.includes(id)
          const startDate: string = headerData.startDate
          const endDate: string = headerData.endDate


          // console.log("randomBannerImg: ", randomBannerImg);
          // console.log("randomBannerImg: ", randomBannerImg);
          // console.log("popularity: ", popularity);
          // console.log("isFavourite: ", isFavourite);
          // console.log("id: ", id);
          // console.log("startDate: ", startDate);
          // console.log("endDate: ", endDate);

          if (randomBannerImg) { document.querySelector("img#anilist--header-manga--banner-image").setAttribute("src", `/DATA/dashboards/anilist/media/manga/banner/${randomBannerImg}`) }

          // cover
          document.querySelector("img#anilist--info-header-manga--cover-image").setAttribute("src", `/DATA/dashboards/anilist/media/manga/cover-image/large/${randomCoverImg}`)

          // popularity
          const popularityBadge = document.querySelector("span#anilist--info-header-manga--info-banner--popularity-badge") as HTMLSpanElement
          popularityBadge.innerText = String(popularity)

          // Average Score
          const averageScoreBadge = document.querySelector("span#anilist--info-header-manga--info-banner--average-score-badge") as HTMLSpanElement
          averageScoreBadge.innerText = `${averageScore}%`

          // Status
          const statusBadge = document.querySelector("span#anilist--info-header-manga--info-banner--status-badge") as HTMLSpanElement
          statusBadge.innerText = status

          // Genres
          const genresBadge = document.querySelector("span#anilist--info-header-manga--info-banner--genres-badge") as HTMLSpanElement
          genresBadge.innerText = genres.join(" • ")

          // Manga Title
          const mangaTitle = document.querySelector("h1#anilist--info-header-manga--manga-title") as HTMLHeadingElement
          mangaTitle.innerText = title

          // volumes
          const volumesBadge = document.querySelector("span#anilist--info-header-manga--info-banner--volumes-badge") as HTMLSpanElement
          volumesBadge.innerText = `\u00a0${volumes}\u00a0`

          // chapters
          const chaptersBadge = document.querySelector("span#anilist--info-header-manga--info-banner--chapters-badge") as HTMLSpanElement
          chaptersBadge.innerText = `\u00a0${chapters}\u00a0`

          // source
          const sourceBadge = document.querySelector("span#anilist--info-header-manga--info-banner--source-badge") as HTMLSpanElement
          sourceBadge.innerText = source




          // isFavourite
          const isFavouriteSVG = document.querySelector("img#anilist--header-manga--is-favourite") as HTMLImageElement
          if (isFavourite && isFavouriteSVG.classList.contains("hidden")) isFavouriteSVG.classList.remove("hidden")
          if (!isFavourite && !isFavouriteSVG.classList.contains("hidden")) isFavouriteSVG.classList.add("hidden")

          // StartDate
          const startDateBadge = document.querySelector("span#anilist--info-header-manga--info-banner--start-date-badge") as HTMLSpanElement
          startDateBadge.innerText = startDate

          // EndDate
          const endDateBadge = document.querySelector("span#anilist--info-header-manga--info-banner--end-date-badge") as HTMLSpanElement
          endDateBadge.innerText = endDate

          // LOG
          console.log(
            `%c SWITCH RANDOM  %c{%c ${title} %c} `,
            "background:black; color:#0f0; font-weight:900",
            "background:black; color:white",
            "background:black; color:#c7f; font-weight:700; font-family: Arial",
            "background:black; color:white"
          );


        }
      }
      changeBannerImgSrc()

    }); // end of the main function "mangaListHeaderDataJSON"
  }) // end of getting manga arr id from json "mangaFavouritesArrayIdJSON"

}
