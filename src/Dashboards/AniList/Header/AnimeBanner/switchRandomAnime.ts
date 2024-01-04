import animeFavouritesArrayIdJSON from "../animeMangaFavouritesArrayIdJSON";
import animeListHeaderDataJSON from "./animeListHeaderDataJSON";



export default function switchRandomAnime(allBanners: boolean) {
  let favouritesAnimeArrayID: number[]
  const SEASON_YEAR = false

  animeFavouritesArrayIdJSON().then((data: { data: { anime: number[] } }) => {
    // console.log("animeFavouritesArrayIdJSON: ", data)
    favouritesAnimeArrayID = data.data.anime
    // console.log("favouritesAnimeArrayID: ", favouritesAnimeArrayID)

    animeListHeaderDataJSON().then((data: any) => {
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

      let animeRandomSwtich: NodeJS.Timeout
      if (allBanners) {
        animeRandomSwtich = setInterval(changeBannerImgSrc, 2_500)
      }

      function changeBannerImgSrc() {
        // to stop setInterval when switching to other tab
        const isAnimeHeaderThere = Boolean(document.querySelector("header#anilist--header-anime"))
        if (!isAnimeHeaderThere) clearInterval(animeRandomSwtich)

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
          const episodes: number = headerData.episodes
          const season: string = headerData.season
          const id: number = headerData.id
          const isFavourite: boolean = favouritesAnimeArrayID.includes(id)
          const startDate: string = headerData.startDate
          const endDate: string = headerData.endDate


          // console.log("randomBannerImg: ", randomBannerImg);
          // console.log("randomBannerImg: ", randomBannerImg);
          // console.log("popularity: ", popularity);
          // console.log("isFavourite: ", isFavourite);
          // console.log("id: ", id);
          // console.log("startDate: ", startDate);
          // console.log("endDate: ", endDate);

          if (randomBannerImg) { document.querySelector("img#anilist--header-anime--banner-image").setAttribute("src", `/DATA/dashboards/anilist/media/anime/banner/${randomBannerImg}`) }

          // cover
          document.querySelector("img#anilist--info-header-anime--cover-image").setAttribute("src", `/DATA/dashboards/anilist/media/anime/cover-image/large/${randomCoverImg}`)

          // popularity
          const popularityBadge = document.querySelector("span#anilist--info-header-anime--info-banner--popularity-badge") as HTMLSpanElement
          popularityBadge.innerText = String(popularity)

          // Average Score
          const averageScoreBadge = document.querySelector("span#anilist--info-header-anime--info-banner--average-score-badge") as HTMLSpanElement
          averageScoreBadge.innerText = `${averageScore}%`

          // Status
          const statusBadge = document.querySelector("span#anilist--info-header-anime--info-banner--status-badge") as HTMLSpanElement
          statusBadge.innerText = status

          // Genres
          const genresBadge = document.querySelector("span#anilist--info-header-anime--info-banner--genres-badge") as HTMLSpanElement
          genresBadge.innerText = genres.join(" • ")

          // Anime Title
          const animeTitle = document.querySelector("h1#anilist--info-header-anime--anime-title") as HTMLHeadingElement
          animeTitle.innerText = title

          // Episodes
          const episodesBadge = document.querySelector("span#anilist--info-header-anime--info-banner--episodes-badge") as HTMLSpanElement
          episodesBadge.innerText = `\u00a0${episodes}\u00a0`

          //  Season
          const seasonBadge = document.querySelector("span#anilist--info-header-anime--info-banner--season-badge") as HTMLSpanElement
          if (SEASON_YEAR) seasonBadge.innerText = `${season} ${startDate.split(" ")[2]}`
          else seasonBadge.innerText = season

          // isFavourite
          const isFavouriteSVG = document.querySelector("img#anilist--header-anime--is-favourite") as HTMLImageElement
          if (isFavourite && isFavouriteSVG.classList.contains("hidden")) isFavouriteSVG.classList.remove("hidden")
          if (!isFavourite && !isFavouriteSVG.classList.contains("hidden")) isFavouriteSVG.classList.add("hidden")

          // StartDate
          const startDateBadge = document.querySelector("span#anilist--info-header-anime--info-banner--start-date-badge") as HTMLSpanElement
          startDateBadge.innerText = startDate

          // EndDate
          const endDateBadge = document.querySelector("span#anilist--info-header-anime--info-banner--end-date-badge") as HTMLSpanElement
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

    }); // end of the main function "animeListHeaderDataJSON"
  }) // end of getting anime arr id from json "animeFavouritesArrayIdJSON"

}
