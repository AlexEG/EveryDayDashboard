import NotificationCard from "../../Notifications/NotificationCard";
import { AnimeIdList, notificationSettingsTypes } from "../../type";
import AniList_API from "../AniList_API";


export default function updateAllDetailsDataAnime(notificationsContainer: HTMLElement, notificationSettings: notificationSettingsTypes) {
  const variables = {
    userId: 6482446,
    userName: "AlexEG",
    type: "ANIME",
  };
  AniList_API("AnimeIdList", variables).then((data: AnimeIdList) => {

    const lists = data.data.MediaListCollection.lists;

    const AllAnimeId: number[] = []

    for (const list of lists) {
      for (const animeID of list.entries) {
        AllAnimeId.push(animeID.media.id);
      }
    }

    console.log("AllAnimeId: ", AllAnimeId);
    // get the completed files from anilist/details-data/anime

    const downloadedDetailsFiles = Array.from(
      window.DATA.readDir("anilist/details-data/anime"), (file: string) => +file.slice(0, -5))

    const needToDownload = AllAnimeId.filter(id => !downloadedDetailsFiles.includes(id))

    console.log("downloadedDetailsFiles: ", downloadedDetailsFiles);
    console.log("needToDownload: ", needToDownload);

    if (needToDownload.length > 0) {


      notificationsContainer.append(NotificationCard(`Offline Data ${needToDownload.length}/${AllAnimeId.length}`, notificationSettings))
      notificationsContainer.append(NotificationCard(`Start downloading ${needToDownload.length} Anime Details File `, notificationSettings))


      let i = 1
      for (const animeId of needToDownload) {
        i++
        const variables = {
          "id": animeId,
          "type": "ANIME",
          "isAdult": false
        }


        setTimeout(() => {

          AniList_API("animeDetailsData", variables).then(data => {
            window.DATA.CreateOrUpdateJSON(
              `dashboards/anilist/details-data/anime/${animeId}.json`,
              data
            )

          })
          notificationsContainer.append(NotificationCard(`Complete Anime ${animeId}`, notificationSettings))
        }
          , 1000 * i)

      }
    } else notificationsContainer.append(NotificationCard(`Your Offline Data is up-to-date`, notificationSettings))

  });
}
