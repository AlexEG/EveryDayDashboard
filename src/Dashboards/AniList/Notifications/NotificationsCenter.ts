import HTML from "../../../components/HTML/HTML";
import updateAllDetailsDataAnimeManga from "../API/helpers/updateAllDetailsDataAnimeManga";
import { notificationSettingsTypes } from "../type";
import NotificationCard from "./NotificationCard";

export default function NotificationsCenter(notificationSettings: notificationSettingsTypes) {
  const styles = "border flex flex-col-reverse gap-y-2 w-80 h-fit fixed right-1 -bottom-1 text-neutral-200"
  const notificationsContainer = HTML("div", styles, "anilist-notifications-container")




  setTimeout(() => notificationsContainer.append(NotificationCard("Checking for Anime Details Data", notificationSettings)), 2000)
  setTimeout(() => updateAllDetailsDataAnimeManga("ANIME", notificationsContainer, notificationSettings), 3000)

  setTimeout(() => notificationsContainer.append(NotificationCard("Checking for Manga Details Data", notificationSettings)), 10_000)
  setTimeout(() => updateAllDetailsDataAnimeManga("MANGA", notificationsContainer, notificationSettings), 12_000)


  // setTimeout(() => notificationsContainer.append(NotificationCard("DB is up-to-date", notificationSettings)), 3000)

  // setTimeout(() => notificationsContainer.append(NotificationCard("Checing for Anime Trending", notificationSettings)), 9000)

  // setTimeout(() => notificationsContainer.append(NotificationCard("Donloading Anime Banners 7/22", notificationSettings)), 4000)

  return notificationsContainer
}

