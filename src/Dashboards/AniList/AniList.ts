import HTML from "../../components/HTML/HTML";
import AniList_API_Call from "./API/AniList_API_Call";
import AniList_API_MangaListHeaderData from "./API/AniList_API_MangaListHeaderData";
import AnimeBanner from "./Header/AnimeBanner/AnimeBanner";
import HomeBanner from "./Header/HomeBanner";
import InfoHeader from "./Header/InfoHeader/InfoHeader";
import MangaBanner from "./Header/MangaBanner/MangaBanner";
// import HomeBanner from "./Header/HomeBanner";
import NavBar from "./NavBar/NavBar";
// import Favorites from "./Pages/Favorites/Favorites";
import AnimeMangaList from "./Pages/AnimeMangaList/AnimeMangaList";
import Favorites from "./Pages/Favorites/Favorites";
import Overview from "./Pages/Overview/Overview";
import Stats from "./Pages/Stats/Stats";
import updateAnimeListHeaderData from "./helper/updateAnimeListHeaderData";
import updateFavouritesArrayID from "./helper/updateFavouritesArrayID";
import updateMangaListHeaderData from "./helper/updateMangaListHeaderData";
import anilistSettingsData from "./settings/anilistSettingsData";
// import Overview from "./Pages/Overview/Overview";

export default function AniList() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-black border-t border-l border-neutral-400 p-4 overflow-y-auto";

  const MainContainer = HTML("main", styles, "anilist");

  // updateFavouritesArrayID()
  // updateAnimeListHeaderData()
  // updateMangaListHeaderData()
  // AniList_API_MangaListHeaderData()
  // AniList_API_Call()

  // get the "defaultHomePage" from DATA/settings/anilist.json  

  anilistSettingsData().then((data: { data: { defaultHomePage: string, defaultIsFilterOpened: boolean } }) => {
    console.log("AniList Settings Data", data)
    const defaultHomePage = data.data.defaultHomePage as "Overview" | "Anime" | "Manga" | "Favorites" | "Stats"
    const defaultIsFilterOpened = data.data.defaultIsFilterOpened



    {
      if (defaultHomePage === "Overview") MainContainer.append(HomeBanner(), Overview());
      else if (defaultHomePage === "Anime") MainContainer.append(AnimeBanner(), InfoHeader("ANIME"), AnimeMangaList("ANIME"));
      else if (defaultHomePage === "Manga") MainContainer.append(MangaBanner(), InfoHeader("MANGA"), AnimeMangaList("MANGA"));
      else if (defaultHomePage === "Favorites") MainContainer.append(HomeBanner(), Favorites());
      else if (defaultHomePage === "Stats") MainContainer.append(HomeBanner(), Stats());
      else console.error("DATA/setting/anilist.json  defaultHomePage not found or not selected")
    }

    MainContainer.insertBefore(NavBar(defaultHomePage, defaultIsFilterOpened), MainContainer.lastChild)

  })
  return MainContainer;
} 