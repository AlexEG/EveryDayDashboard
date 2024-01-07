import AnimeBanner from "../Header/AnimeBanner/AnimeBanner";
import HomeBanner from "../Header/HomeBanner";
import InfoHeader from "../Header/InfoHeader/InfoHeader";
import MangaBanner from "../Header/MangaBanner/MangaBanner";
import AnimeMangaList from "../Pages/AnimeMangaList/AnimeMangaList";
import Favorites from "../Pages/Favorites/Favorites";
import Overview from "../Pages/Overview/Overview";
import Stats from "../Pages/Stats/Stats";

export default function removeRenderPage(navLinkBtn: HTMLButtonElement): void {
  const pageName = navLinkBtn.innerText;
  const anilistMainContainer = document.querySelector("main#anilist");
  const header = document.querySelector("main > header")
  const infoHeaderAnime = document.querySelector("main > div#anilist--info-header-anime")
  const infoHeaderManga = document.querySelector("main > div#anilist--info-header-manga")

  anilistMainContainer.querySelector("section").remove();

  if (pageName === "Overview") {
    anilistMainContainer.append(Overview())
    header.remove()
    if (infoHeaderAnime) infoHeaderAnime.remove()
    if (infoHeaderManga) infoHeaderManga.remove()
    anilistMainContainer.insertBefore(HomeBanner(), anilistMainContainer.firstChild)
  }

  if (pageName === "Anime") {
    anilistMainContainer.append(AnimeMangaList("ANIME", false));
    header.remove()
    if (infoHeaderManga) infoHeaderManga.remove()
    anilistMainContainer.insertBefore(InfoHeader("ANIME"), anilistMainContainer.firstChild)
    anilistMainContainer.insertBefore(AnimeBanner(), anilistMainContainer.firstChild)
  }

  if (pageName === "Manga") {
    anilistMainContainer.append(AnimeMangaList("MANGA", false));
    header.remove()
    if (infoHeaderAnime) infoHeaderAnime.remove()
    anilistMainContainer.insertBefore(InfoHeader("MANGA"), anilistMainContainer.firstChild)
    anilistMainContainer.insertBefore(MangaBanner(), anilistMainContainer.firstChild)
  }

  if (pageName === "Favorites") anilistMainContainer.append(Favorites());

  if (pageName === "Stats") anilistMainContainer.append(Stats());

}
