import AnimeBanner from "../Header/AnimeBanner/AnimeBanner";
import HomeBanner from "../Header/HomeBanner";
import InfoHeader from "../Header/InfoHeader/InfoHeader";
import AnimeMangaList from "../Pages/AnimeMangaList/AnimeMangaList";
import Favorites from "../Pages/Favorites/Favorites";
import Overview from "../Pages/Overview/Overview";
import Stats from "../Pages/Stats/Stats";

export default function removeRenderPage(navLinkBtn: HTMLButtonElement): void {
  const pageName = navLinkBtn.innerText;
  const anilistMainContainer = document.querySelector("main#anilist");
  const header = document.querySelector("main > header")
  const infoHeader = document.querySelector("main > div#anilist--info-header-anime")

  anilistMainContainer.lastElementChild.remove();

  if (pageName === "Overview") {
    anilistMainContainer.append(Overview())
    header.remove()
    infoHeader.remove()
    anilistMainContainer.insertBefore(HomeBanner(), anilistMainContainer.firstChild)
  }

  if (pageName === "Anime List") {
    anilistMainContainer.append(AnimeMangaList("ANIME"));
    header.remove()
    anilistMainContainer.insertBefore(InfoHeader(), anilistMainContainer.firstChild)
    anilistMainContainer.insertBefore(AnimeBanner(), anilistMainContainer.firstChild)

  }

  if (pageName === "Manga List")
    anilistMainContainer.append(AnimeMangaList("MANGA"));

  if (pageName === "Favorites") anilistMainContainer.append(Favorites());

  if (pageName === "Stats") anilistMainContainer.append(Stats());

}
