import AnimeMangaList from "../Pages/AnimeMangaList/AnimeMangaList";
import Favorites from "../Pages/Favorites/Favorites";
import Overview from "../Pages/Overview/Overview";
import Stats from "../Pages/Stats/Stats";

export default function removeRenderPage(navLinkBtn: HTMLButtonElement): void {
  const pageName = navLinkBtn.innerText;
  const anilistMainContainer = document.querySelector("main#anilist");

  anilistMainContainer.lastElementChild.remove();

  if (pageName === "Overview") anilistMainContainer.append(Overview());
  if (pageName === "Anime List")
    anilistMainContainer.append(AnimeMangaList("ANIME"));
  if (pageName === "Manga List")
    anilistMainContainer.append(AnimeMangaList("MANGA"));
  if (pageName === "Favorites") anilistMainContainer.append(Favorites());
  if (pageName === "Stats") anilistMainContainer.append(Stats());
}
