import animeFavouritesArrayIdJSON from "./animeFavouritesArrayIdJSON";
import animeListHeaderDataJSON from "./animeListHeaderDataJSON";



export default function randomBannerImg(allBanners: boolean) {
  let favouritesAnimeArrayID: number[]

  animeFavouritesArrayIdJSON().then((data: { data: { anime: number[] } }) => {
    // console.log("animeFavouritesArrayIdJSON: ", data)
    favouritesAnimeArrayID = data.data.anime
    console.log("favouritesAnimeArrayID: ", favouritesAnimeArrayID)


    animeListHeaderDataJSON().then((data: any) => {
      console.log("animeListHeaderDataJSON: ", data);

      const numberOfAnime = data.data.metadata.size
      const animeHeaderData = data.data.data
      // console.log("numberOfAnime: ", numberOfAnime);
      // console.log("animeHeaderData: ", animeHeaderData);

      const getRandom = () => {
        const randomNum = Math.floor(Math.random() * numberOfAnime)
        const randomAnime = animeHeaderData[randomNum]
        return randomAnime
      }

      const changeBannerImgSrc = () => {
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




        // console.log("randomBannerImg: ", randomBannerImg);
        // console.log("randomBannerImg: ", randomBannerImg);
        // console.log("popularity: ", popularity);
        // console.log("isFavourite: ", isFavourite);
        // console.log("id: ", id);

        if (randomBannerImg) { document.querySelector("img#anilist--header--banner-image").setAttribute("src", `/DATA/dashboards/anilist/media/anime/banner/${randomBannerImg}`) }

        // cover
        document.querySelector("img#anilist--info-header--cover-image").setAttribute("src", `/DATA/dashboards/anilist/media/anime/cover-image/large/${randomCoverImg}`)

        // popularity
        const popularityBadge = document.querySelector("span#anilist--info-header--info-banner--popularity-badge") as HTMLSpanElement
        popularityBadge.innerText = String(popularity)

        // Average Score
        const averageScoreBadge = document.querySelector("span#anilist--info-header--info-banner--average-score-badge") as HTMLSpanElement
        averageScoreBadge.innerText = `${averageScore}%`

        // Status
        const statusBadge = document.querySelector("span#anilist--info-header--info-banner--status-badge") as HTMLSpanElement
        statusBadge.innerText = status

        // Genres
        const genresBadge = document.querySelector("span#anilist--info-header--info-banner--genres-badge") as HTMLSpanElement
        genresBadge.innerText = genres.join(" • ")

        // Anime Title
        const animeTitle = document.querySelector("h1#anilist--info-header--anime-title") as HTMLHeadingElement
        animeTitle.innerText = title

        // Episodes
        const episodesBadge = document.querySelector("span#anilist--info-header--info-banner--episodes-badge") as HTMLSpanElement
        episodesBadge.innerText = `\u00a0${episodes}\u00a0`

        //  Season
        const seasonBadge = document.querySelector("span#anilist--info-header--info-banner--season-badge") as HTMLSpanElement
        seasonBadge.innerText = season

        // isFavourite
        const isFavouriteSVG = document.querySelector("img#anilist--header--is-favourite") as HTMLImageElement
        if (isFavourite && isFavouriteSVG.classList.contains("hidden")) isFavouriteSVG.classList.remove("hidden")
        if (!isFavourite && !isFavouriteSVG.classList.contains("hidden")) isFavouriteSVG.classList.add("hidden")






        // LOG
        console.log(
          `%c SWITCH RANDOM  %c{%c ${title} %c} `,
          "background:black; color:#0f0; font-weight:900",
          "background:black; color:white",
          "background:black; color:#c7f; font-weight:700; font-family: Arial",
          "background:black; color:white"
        );


      }
      changeBannerImgSrc()

      if (allBanners) setInterval(changeBannerImgSrc, 2_500)

    }); // end of the main function "animeListHeaderDataJSON"
  }) // end of getting anime arr id from json "animeFavouritesArrayIdJSON"

}
