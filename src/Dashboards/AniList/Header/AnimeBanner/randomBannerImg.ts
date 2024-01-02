import animeListHeaderDataJSON from "./animeListHeaderDataJSON";



export default function randomBannerImg(allBanners: boolean) {
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

    const changeBannerImgSrc = () => {

      // console.log(getRandom())
      const randomBannerImg = getRandom().bannerImgFileName
      // console.log("randomBannerImg: ", randomBannerImg);

      document.querySelector("img#anilist-header-banner-image").setAttribute("src", `/DATA/dashboards/anilist/media/anime/banner/${randomBannerImg}`)



      const title = getRandom().title
      // LOG
      console.log(
        `%c SWITCH RANDOM  %c{%c ${title}     ${randomBannerImg}%c } `,
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
