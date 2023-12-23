import AniList_API_AnimeMangaCoverImages from "../API/AniList_API_AnimeMangaCoverImages";
interface API_AnimeMangaCoverImage {
  data: {
    MediaListCollection: {
      lists: {
        entries: {
          media: {
            coverImage: { extraLarge: string; large: string };
            title: { userPreferred: string; english: string };
          };
        }[];
      }[];
    };
  };
}

export default function downloadCovers(
  type: "ANIME" | "MANGA",
  size: "extraLarge" | "large"
) {
  console.log(
    `%c Check & Update All ${type} Cover Image `,
    "background:black; color:#0f0 ; font-weight:900"
  );
  AniList_API_AnimeMangaCoverImages(type)
    .then((data: API_AnimeMangaCoverImage) => {
      console.log(`API DATA ${type} Banners`, data);
      const lists = data.data.MediaListCollection.lists;

      for (const [, list] of Object.entries(lists)) {
        for (const listItme of list.entries) {
          // listItme = manga or anime object
          const imgURL = listItme.media.coverImage[size];
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

            const sizeURL =
              size === "extraLarge" ? /(?<=large\/).*/g : /(?<=medium\/).*/g;
            const imgFileName = String(imgURL.match(sizeURL));

            // console.log("animeTitle", animeTitle);

            const LOG_CSS = [
              "background:black; color:#0f0 ; font-weight:900",
              "background:black; color:white",
              "background:black; color:#c7f",
            ];

            const logMessage = [
              `%c Download Complete %c ${type}  coverImage ${size} %c ${animeOrMangaTitle} `,
              ...LOG_CSS,
            ];
            window.DATA.downloadImg(
              imgURL,
              imgFileName,
              `dashboards/anilist/media/${type.toLocaleLowerCase()}/cover-image/${size}`,
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
