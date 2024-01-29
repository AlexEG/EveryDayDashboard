import HTML from "../../../components/HTML/HTML";
import downloadBanners from "../API/updateOfflineData/downloadBanners";
import downloadCoverImages from "../API/updateOfflineData/downloadCoverImages";
import updateAllDetailsDataAnimeManga from "../API/updateOfflineData/updateAllDetailsDataAnimeManga";
import updateAnimeMangaList from "../API/updateOfflineData/updateAnimeMangaList";
import { AutoUpdateOfflineData, notificationSettingsTypes } from "../type";
// import NotificationCard from "./NotificationCard";

export default function NotificationsCenter(
  userId:number,
  userName:string,
  notificationSettings: notificationSettingsTypes,
  autoUpdateOfflineData: AutoUpdateOfflineData
) {
  const checkThenUpdate = autoUpdateOfflineData.checkThenUpdate;
  const updateAnime = checkThenUpdate.anime;
  const updateManga = checkThenUpdate.manga;

  const styles =
    "flex-col-reverse flex gap-y-2 w-80 h-fit fixed right-1 -bottom-1 text-neutral-200";
  const notificationsContainer = HTML(
    "div",
    styles,
    "anilist-notifications-container"
  )

  // -------------  ------------- //

  // ANIME //
  if (updateAnime.allAnimeDetailsData)
  setTimeout(
    () =>
      updateAllDetailsDataAnimeManga(
        userId,
        userName,
        "ANIME",
        notificationsContainer,
        notificationSettings
      ),
    3000
  )

  if (updateAnime.animeList)
  setTimeout(
    () =>
      updateAnimeMangaList(
        userId,
        userName,
        "ANIME",
        notificationsContainer,
        notificationSettings
      ),
    4000
  );

  if (updateAnime.animeBanners)
  setTimeout(
    () =>
      downloadBanners(userId, userName,"ANIME", notificationsContainer, notificationSettings),
    5000
  );

  if (updateAnime.animeCoverImageExtraLargeSize)
  setTimeout(
    () =>
      downloadCoverImages(
        userId,
        userName,
        "ANIME",
        "extraLarge",
        notificationsContainer,
        notificationSettings
      ),
    1000
  );

  if (updateAnime.animeCoverImageLargeSize)
  setTimeout(
    () =>
      downloadCoverImages(
        userId,
        userName,
        "ANIME",
        "large",
        notificationsContainer,
        notificationSettings
      ),
    2000
  );

  // MANGA //
  if (updateManga.allMangaDetailsData)
  setTimeout(
    () =>
      updateAllDetailsDataAnimeManga(
        userId,
        userName,
        "MANGA",
        notificationsContainer,
        notificationSettings
      ),
    6000
  );

  if (updateManga.mangaList)
  setTimeout(
    () =>
      updateAnimeMangaList(
        userId,
        userName,
        "MANGA",
        notificationsContainer,
        notificationSettings
      ),
    7000
  );

  if (updateManga.mangaBanners)
  setTimeout(
    () =>
      downloadBanners(userId, userName, "MANGA", notificationsContainer, notificationSettings),
    8000
  );

  // -------------  ------------- //

  return notificationsContainer;
}
