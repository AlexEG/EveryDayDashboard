import animeListHeaderDataJSON from "./animeListHeaderDataJSON";



export default function randomBannerImg(allBanners: boolean) {
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
      const randomBannerImg = headerData.bannerImgFileName
      const randomCoverImg = headerData.coverImgFileName
      const popularity = headerData.popularity
      const averageScore = headerData.averageScore
      const status = headerData.status

      // console.log("randomBannerImg: ", randomBannerImg);
      // console.log("randomBannerImg: ", randomBannerImg);
      // console.log("popularity: ", popularity);

      if (randomBannerImg) { document.querySelector("img#anilist--header--banner-image").setAttribute("src", `/DATA/dashboards/anilist/media/anime/banner/${randomBannerImg}`) }

      // cover
      document.querySelector("img#anilist--info-header--cover-image").setAttribute("src", `/DATA/dashboards/anilist/media/anime/cover-image/large/${randomCoverImg}`)

      // popularity
      const popularityBadge = document.querySelector("span#anilist--info-header--info-banner--popularity-badge") as HTMLSpanElement
      popularityBadge.innerText = popularity

      // Average Score
      const averageScoreBadge = document.querySelector("span#anilist--info-header--info-banner--average-score-badge") as HTMLSpanElement
      averageScoreBadge.innerText = `${averageScore}%`

      // Status
      const statusBadge = document.querySelector("span#anilist--info-header--info-banner--status-badge") as HTMLSpanElement
      statusBadge.innerText = status




      const title = headerData.title
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

  });

}
