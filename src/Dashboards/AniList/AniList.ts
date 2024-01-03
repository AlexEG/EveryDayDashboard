import HTML from "../../components/HTML/HTML";
import AnimeBanner from "./Header/AnimeBanner/AnimeBanner";
import InfoHeader from "./Header/InfoHeader/InfoHeader";
// import HomeBanner from "./Header/HomeBanner";
import NavBar from "./NavBar/NavBar";
// import Favorites from "./Pages/Favorites/Favorites";
import AnimeMangaList from "./Pages/AnimeMangaList/AnimeMangaList";
import updateAnimeListHeaderData from "./helper/updateAnimeListHeaderData";
// import Overview from "./Pages/Overview/Overview";

export default function AniList() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-black border-t border-l border-neutral-400 p-4 overflow-y-auto";

  const MainContainer = HTML("main", styles, "anilist");

  updateAnimeListHeaderData()
  MainContainer.append(AnimeBanner(), InfoHeader(), NavBar(), AnimeMangaList("ANIME"));
  return MainContainer;
}
