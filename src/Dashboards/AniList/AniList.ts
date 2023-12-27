import HTML from "../../components/HTML/HTML";
import HomeBanner from "./Header/HomeBanner";
import NavBar from "./NavBar/NavBar";
import AnimeMangaList from "./Pages/AnimeMangaList/AnimeMangaList";

export default function AniList() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-black border-t border-l border-neutral-400 p-4 overflow-y-auto";

  const MainContainer = HTML("main", styles, "anilist");

  MainContainer.append(HomeBanner(), NavBar(), AnimeMangaList("ANIME"));
  return MainContainer;
}
