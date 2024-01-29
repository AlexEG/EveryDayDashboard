import HTML from "../../../components/HTML/HTML";
import Anime from "./Anime/Anime";

export default function AniList() {
  const styles =
    "w-[calc(100%-15rem)] h-full pt-2 px-4 pb-4 flex flex-col select-none overflow-y-auto";
  const mainContainer = HTML("section", styles, "settings--aniList");
  const h1 = HTML("h1", "text-neutral-50 font-bold mb-2", "", "AniList");

  mainContainer.append(h1, Anime());

  return mainContainer;
}
