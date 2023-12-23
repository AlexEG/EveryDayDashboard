import AniList_API_AnimeMangaBanners from "../API/AniList_API_AnimeMangaBanners";
interface API_AnimeMangaBanner {
  data: {
    MediaListCollection: {
      lists: {
        entries: {
          media: {
            bannerImage: string;
            title: { userPreferred: string; english: string };
          };
        }[];
      }[];
    };
  };
}

export default function downloadBanner(type: "ANIME" | "MANGA") {
  console.log(
    `%c Check & Update All ${type} Banner `,
    "background:black; color:#0f0 ; font-weight:900"
  );
  AniList_API_AnimeMangaBanners(type)
    .then((data: API_AnimeMangaBanner) => {
      console.log(`API DATA ${type} Banners`, data);
      const lists = data.data.MediaListCollection.lists;
      // console.log("lists", lists);

      for (const [, list] of Object.entries(lists)) {
        // console.log("key", key);
        // console.log("list", list);

        for (const listItme of list.entries) {
          // listItme = manga or anime object
          const imgURL = listItme.media.bannerImage;
          // console.log("imgURL", imgURL);

          if (imgURL) {
            const animeOrMangaTitleUserPreferred =
              listItme.media.title.userPreferred;
            const animeOrMangaTitleEnglish = listItme.media.title.english;
            const animeOrMangaTitle = `${
              animeOrMangaTitleEnglish
                ? animeOrMangaTitleEnglish
                : animeOrMangaTitleUserPreferred
            }`;

            const imgFileName = String(imgURL.match(/(?<=banner\/).*/g));

            // console.log("animeTitle", animeTitle);

            const LOG_CSS = [
              "background:black; color:#0f0 ; font-weight:900",
              "background:black; color:white",
              "background:black; color:#c7f",
            ];

            const logMessage = [
              `%c Download Complete %c ${type}  Banner %c ${animeOrMangaTitle} `,
              ...LOG_CSS,
            ];
            window.DATA.downloadImg(
              imgURL,
              imgFileName,
              `dashboards/anilist/media/${type.toLocaleLowerCase()}/banner`,
              logMessage
            );
          } // END if(imgURL)
        }
      }
    })
    .then(() =>
      console.log(
        `%c All ${type} Banner Are Downloaded & up-to-date `,
        "background:black; color:#0f0 ; font-weight:900"
      )
    );
}
