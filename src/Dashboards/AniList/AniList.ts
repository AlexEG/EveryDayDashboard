import HTML from "../../components/HTML/HTML";
import AnimeList from "./AnimeList/AnimeList";
import HomeBanner from "./Header/HomeBanner";
import NavBar from "./NavBar/NavBar";

export default function AniList() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-black border-t border-l border-neutral-400 p-4";

  const MainContainer = HTML("main", styles, "anilist");

  MainContainer.append(HomeBanner(), NavBar(), AnimeList());
  return MainContainer;
}
