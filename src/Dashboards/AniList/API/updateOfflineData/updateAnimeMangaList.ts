import NotificationCard from "../../Notifications/NotificationCard";
import { AnimeList, notificationSettingsTypes } from "../../type";
import AniList_API from "../AniList_API";

export default function updateAnimeMangaList(
  type: "ANIME" | "MANGA",
  notificationsContainer: HTMLElement,
  notificationSettings: notificationSettingsTypes
) {
  const variables = {
    userId: 6482446,
    userName: "AlexEG",
    type: type,
  };
  notificationsContainer.append(
    NotificationCard(`Checking for ${type} List`, notificationSettings)
  );

  setTimeout(() => {
    AniList_API("AnimeList", variables).then(({ data }: AnimeList) => {
      // console.log("API AnimeList: ", data);

      const offlineData = window.DATA.getJSONFileData(
        "dashboards/anilist/anime-list-data"
      );

      if (!(offlineData === data)) {
        const lists = data.MediaListCollection.lists;

        const updatedData: { data: Record<string, any> } = { data: {} };

        for (const list of lists) {
          updatedData.data[list.name] = list.entries;
        }

        // console.log("updatedData: ", updatedData);

        window.DATA.CreateOrUpdateJSON(
          `dashboards/anilist/${type.toLowerCase()}-list-data.json`,
          updatedData
        );
      } else
        notificationsContainer.append(
          NotificationCard(
            `Your ${type} List Offline Data is up-to-date`,
            notificationSettings
          )
        );
    });
  }, 2_000);
}
