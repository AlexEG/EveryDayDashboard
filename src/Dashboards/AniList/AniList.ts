import HTML from "../../components/HTML/HTML";
import AnimeMangaHeader from "./Header/AnimeMangaHeader/AnimeMangaHeader";
import HomeBanner from "./Header/HomeBanner";
import NavBar from "./NavBar/NavBar";
import NotificationsCenter from "./Notifications/NotificationsCenter";
import AnimeMangaPage from "./Pages/AnimeMangaList/AnimeMangaPage";
import Favorites from "./Pages/Favorites/Favorites";
import Overview from "./Pages/Overview/Overview";
import Stats from "./Pages/Stats/Stats";
import anilistSettingsData from "./settings/anilistSettingsData";
import { anilistSettingsDataTypes, animeHeaderTypes, mangaHeaderTypes } from "./type";
import ScrollbarStyles from "./utils/ScrollbarStyles";
import getThemeClassNameAndColorValue from "./utils/getThemeClassNameAndColorValue";


export default function AniList() {
  const styles =
    "border h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-black border-t border-l border-neutral-400 py-4 pl-4 pr-3 overflow-y-auto ";

  const MainContainer = HTML("main", styles, "anilist");

  // console.log(getComputedStyle(MainContainer))

  anilistSettingsData().then(({ data }: anilistSettingsDataTypes) => {
    //***  Theme ***//

    const theme = data.theme
    const builtInTheme = theme.builtInTheme

    const { themeClassName, themeColorValue } = getThemeClassNameAndColorValue(builtInTheme)


    console.log("themeClassName: ", themeClassName)
    console.log("themeColorValue: ", themeColorValue)

    /** default built-in themes
     * bg-slate-600    rgb(71 85 105)
     * bg-neutral-600  rgb(82 82 82)
     * bg-red-600      rgb(220 38 38)
     * bg-orange-600   rgb(234 88 12)
     * bg-lime-600     rgb(101 163 13)
     * bg-green-600    rgb(22 163 74)
     * bg-emerald-600  rgb(5 150 105) 
     * bg-teal-600     rgb(13 148 136)
     * bg-cyan-600     rgb(8 145 178)
     * bg-sky-600      rgb(2 132 199)
     * bg-blue-600     rgb(37 99 235)
     * bg-indigo-600   rgb(79 70 229)
     * bg-violet-600   rgb(124 58 237)
     * bg-purple-600   rgb(147 51 234)
     * bg-pink-600     rgb(219 39 119)
     * bg-rose-600     rgb(225 29 72)
    */

    // Scrollbar Thumb Color
    MainContainer.append(ScrollbarStyles("lime"))
    //***  Theme [END] ***//

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

    const animeLists = animePage.lists
    const mangaLists = mangaPage.lists


    // --------- --------- --------- --------- //
    {
      if (defaultHomePage === "Overview") MainContainer.append(HomeBanner(), Overview());
      else if (defaultHomePage === "Anime") MainContainer.append(AnimeMangaHeader("ANIME", animeHeaderSettings), AnimeMangaPage("ANIME", animeLists, filterIsOpenByDefault));
      else if (defaultHomePage === "Manga") MainContainer.append(AnimeMangaHeader("MANGA", mangaHeaderSettings), AnimeMangaPage("MANGA", mangaLists, filterIsOpenByDefault));
      else if (defaultHomePage === "Favorites") MainContainer.append(HomeBanner(), Favorites());
      else if (defaultHomePage === "Stats") MainContainer.append(HomeBanner(), Stats());
      else console.error("DATA/setting/anilist.json  defaultHomePage not found or not selected")
    }

    MainContainer.insertBefore(NavBar(defaultHomePage, filterIsOpenByDefault), MainContainer.lastChild)

    if (notificationSettings.isEnabled) MainContainer.append(NotificationsCenter(notificationSettings, autoUpdateOfflineData))




  })
  return MainContainer;
} 