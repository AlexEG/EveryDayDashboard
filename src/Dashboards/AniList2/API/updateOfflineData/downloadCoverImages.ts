import NotificationCard from "../../Notifications/NotificationCard";
import { notificationSettingsTypes } from "../../type";
import AniList_API from "../AniList_API";

export default function downloadCoverImages(
  userId: number,
  userName: string,
  type: "ANIME" | "MANGA",
  size: "extraLarge" | "large",
  notificationsContainer: HTMLElement,
  notificationSettings: notificationSettingsTypes,
) {
  const variables = {
    userId: userId,
    userName: userName,
    type: type,
  };
  notificationsContainer.append(
    NotificationCard(
      `Check & Update All ${type} ${size} Cover Image`,
      notificationSettings,
    ),
  );
  console.log(
    `%c Check & Update All ${type} Cover Image `,
    "background:black; color:#0f0 ; font-weight:900",
  );

  const coverSize =
    size === "extraLarge" ? "CoverImageExtraLargeSize" : "CoverImageLargeSize";

  AniList_API(coverSize, variables).then(({ data }: any) => {
    console.log(`API DATA ${type} Cover Images`, data);
    const lists = data.MediaListCollection.lists;

    const downloadedCoverImages: Array<string> = window.DATA.readDir(
      `anilist/media/${type.toLowerCase()}/cover-image/${size}`,
    );
    // console.log("downloadedCoverImages: ", downloadedCoverImages)
    let i = 0;

    for (const [, list] of Object.entries(lists)) {
      for (const listItme of list.entries) {
        const imgURL =
          size === "extraLarge"
            ? listItme.media.coverImage.extraLarge
            : listItme.media.coverImage.large;

        if (imgURL) {
          const imgFileName =
            size === "extraLarge"
              ? String(imgURL.match(/(?<=large\/).*/g))
              : String(imgURL.match(/(?<=medium\/).*/g));

          if (!downloadedCoverImages.includes(imgFileName)) {
            i++;
            // console.log("imgURL", imgURL);

            setTimeout(() => {
              const animeOrMangaTitleUserPreferred =
                listItme.media.title.userPreferred;
              const animeOrMangaTitleEnglish = listItme.media.title.english;
              const animeOrMangaTitle = `${
                animeOrMangaTitleEnglish
                  ? animeOrMangaTitleEnglish
                  : animeOrMangaTitleUserPreferred
              }`;

              const LOG_CSS = [
                "background:black; color:#0f0 ; font-weight:900",
                "background:black; color:white",
                "background:black; color:#c7f",
              ];

              const logMessage = [
                `%c Download Complete %c  ${type} ${size} size Cover %c ${animeOrMangaTitle} `,
                ...LOG_CSS,
              ];

              window.DATA.downloadImg(
                imgURL,
                imgFileName,
                `dashboards/anilist/media/${type.toLowerCase()}/cover-image/${size}`,
                logMessage,
              );
              notificationsContainer.append(
                NotificationCard(
                  `Download Complete ${type} ${size} size Cover\n${animeOrMangaTitle}`,
                  notificationSettings,
                ),
              );
            }, 1000 * i);
          }
        } // END if(imgURL)
      }
    }
  });
}
