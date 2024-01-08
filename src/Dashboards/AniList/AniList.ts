import HTML from "../../components/HTML/HTML";
import AnimeMangaHeader from "./Header/AnimeMangaHeader/AnimeMangaHeader";
import HomeBanner from "./Header/HomeBanner";
import NavBar from "./NavBar/NavBar";
import NotificationsCenter from "./Notifications/NotificationsCenter";
import AnimeMangaList from "./Pages/AnimeMangaList/AnimeMangaList";
import Favorites from "./Pages/Favorites/Favorites";
import Overview from "./Pages/Overview/Overview";
import Stats from "./Pages/Stats/Stats";
import anilistSettingsData from "./settings/anilistSettingsData";
import { anilistSettingsDataTypes, animeHeaderTypes, mangaHeaderTypes } from "./type";


export default function AniList() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-black border-t border-l border-neutral-400 p-4 overflow-y-auto";

  const MainContainer = HTML("main", styles, "anilist");


  anilistSettingsData().then(({ data }: anilistSettingsDataTypes) => {
    // console.log("AniList Settings Data", data)
    const defaultHomePage = data.defaultHomePage as "Overview" | "Anime" | "Manga" | "Favorites" | "Stats"
    const filterIsOpenByDefault = data.filterIsOpenByDefault
    const pages = data.pages
    //    ^?

    const animePage = pages.anime
    const mangaPage = pages.manga

    // header
    const animeHeaderSettings = animePage.header as animeHeaderTypes
    const mangaHeaderSettings = mangaPage.header as mangaHeaderTypes

    // auto Update Offline Data
    const autoUpdateOfflineData = data.autoUpdateOfflineData

    // Notification
    const notificationSettings = data.notification



    // --------- --------- --------- --------- //
    {
      if (defaultHomePage === "Overview") MainContainer.append(HomeBanner(), Overview());
      else if (defaultHomePage === "Anime") MainContainer.append(AnimeMangaHeader("ANIME", animeHeaderSettings), AnimeMangaList("ANIME", filterIsOpenByDefault));
      else if (defaultHomePage === "Manga") MainContainer.append(AnimeMangaHeader("MANGA", mangaHeaderSettings), AnimeMangaList("MANGA", filterIsOpenByDefault));
      else if (defaultHomePage === "Favorites") MainContainer.append(HomeBanner(), Favorites());
      else if (defaultHomePage === "Stats") MainContainer.append(HomeBanner(), Stats());
      else console.error("DATA/setting/anilist.json  defaultHomePage not found or not selected")
    }

    MainContainer.insertBefore(NavBar(defaultHomePage, filterIsOpenByDefault), MainContainer.lastChild)

    if (notificationSettings.isEnabled) MainContainer.append(NotificationsCenter(notificationSettings, autoUpdateOfflineData))


  })
  return MainContainer;
} 