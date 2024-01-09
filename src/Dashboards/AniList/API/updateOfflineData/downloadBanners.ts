import NotificationCard from "../../Notifications/NotificationCard";
import { AnimeList, notificationSettingsTypes } from "../../type";
import AniList_API from "../AniList_API";

export default function downloadBanners(type: "ANIME" | "MANGA",
  notificationsContainer: HTMLElement,
  notificationSettings: notificationSettingsTypes) {
  const variables = {
    userId: 6482446,
    userName: "AlexEG",
    type: type,
  };
  notificationsContainer.append(
    NotificationCard(`Checking for ${type} Banners`, notificationSettings)
  );


  setTimeout(() => {
    AniList_API("Banners", variables)
      .then(({ data }: AnimeList) => {
        console.log(`API DATA ${type} Banners`, data);
        const lists = data.MediaListCollection.lists;


        const downloadedBannersImages: Array<string> = window.DATA.readDir(`anilist/media/${type.toLowerCase()}/banner`)

        let i = 0

        for (const [, list] of Object.entries(lists)) {
          for (const listItme of list.entries) {
            const imgURL = listItme.media.bannerImage;

            // console.log("imgURL", imgURL);

            if (imgURL) {
              const imgFileName = String(imgURL.match(/(?<=banner\/).*/g));

              if (!downloadedBannersImages.includes(imgFileName)) {
                i++

                setTimeout(() => {

                  const animeOrMangaTitleUserPreferred =
                    listItme.media.title.userPreferred;
                  const animeOrMangaTitleEnglish = listItme.media.title.english;
                  const animeOrMangaTitle = `${animeOrMangaTitleEnglish
                    ? animeOrMangaTitleEnglish
                    : animeOrMangaTitleUserPreferred
                    }`;


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
                  notificationsContainer.append(NotificationCard(`Download Complete ${type} Banner\n${animeOrMangaTitle}`, notificationSettings))
                }, 1000 * i)
              }
            } // END if(imgURL)
          }
        }
      })


  }, 2_000)

}
