import HTML from "../../../components/HTML/HTML";
import updateAllDetailsDataAnimeManga from "../API/updateOfflineData/updateAllDetailsDataAnimeManga";
import updateAnimeMangaList from "../API/updateOfflineData/updateAnimeMangaList";
import { AutoUpdateOfflineData, notificationSettingsTypes } from "../type";
import NotificationCard from "./NotificationCard";

export default function NotificationsCenter(notificationSettings: notificationSettingsTypes, autoUpdateOfflineData: AutoUpdateOfflineData) {


  const checkThenUpdate = autoUpdateOfflineData.checkThenUpdate
  const updateAnime = checkThenUpdate.anime
  const updateManga = checkThenUpdate.manga

  // const forceToUpdate = autoUpdateOfflineData.forceToUpdate  // NOT NOW


  const styles = "border flex flex-col-reverse gap-y-2 w-80 h-fit fixed right-1 -bottom-1 text-neutral-200"
  const notificationsContainer = HTML("div", styles, "anilist-notifications-container")


  // -------------  ------------- //

  // ANIME //
  if (updateAnime.allAnimeDetailsData) setTimeout(() => updateAllDetailsDataAnimeManga("ANIME", notificationsContainer, notificationSettings), 3000)

  if (updateAnime.animeList) setTimeout(() => updateAnimeMangaList("ANIME", notificationsContainer, notificationSettings), 5000)


  // MANGA //
  if (updateManga.allMangaDetailsData) setTimeout(() => updateAllDetailsDataAnimeManga("MANGA", notificationsContainer, notificationSettings), 12_000)

  if (updateManga.mangaList) setTimeout(() => updateAnimeMangaList("MANGA", notificationsContainer, notificationSettings), 13_000)


  // -------------  ------------- //

  return notificationsContainer
}

