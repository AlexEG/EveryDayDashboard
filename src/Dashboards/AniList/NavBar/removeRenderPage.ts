import AnimeMangaHeader from "../Header/AnimeMangaHeader/AnimeMangaHeader";
import HomeBanner from "../Header/HomeBanner";
import AnimeMangaPage from "../Pages/AnimeMangaList/AnimeMangaPage";
import Favorites from "../Pages/Favorites/Favorites";
import Overview from "../Pages/Overview/Overview";
import Stats from "../Pages/Stats/Stats";
import anilistSettingsData from "../settings/anilistSettingsData";
import {
  anilistSettingsDataTypes,
  animeHeaderTypes,
  mangaHeaderTypes,
} from "../type";

export default function removeRenderPage(navLinkBtn: HTMLButtonElement): void {
  const pageName = navLinkBtn.innerText;
  const anilistMainContainer = document.querySelector("main#anilist");
  const header = document.querySelector("main > header");
  anilistMainContainer.querySelector("section").remove();

  anilistSettingsData().then((data: anilistSettingsDataTypes) => {
    const filterIsOpenByDefault = data.data.filterIsOpenByDefault;
    const pages = data.data.pages;

    const animePage = pages.anime;
    const mangaPage = pages.manga;

    // header
    const animeHeaderSettings = animePage.header as animeHeaderTypes;
    const mangaHeaderSettings = mangaPage.header as mangaHeaderTypes;

    if (pageName === "Overview") {
      anilistMainContainer.append(Overview());
      header.remove();

      anilistMainContainer.prepend(HomeBanner());
    }

    if (pageName === "Anime") {
      anilistMainContainer.append(
        AnimeMangaPage("ANIME", filterIsOpenByDefault),
      );
      header.remove();
      anilistMainContainer.prepend(
        AnimeMangaHeader("ANIME", animeHeaderSettings),
      );
    }

    if (pageName === "Manga") {
      anilistMainContainer.append(
        AnimeMangaPage("MANGA", filterIsOpenByDefault),
      );
      header.remove();
      anilistMainContainer.prepend(
        AnimeMangaHeader("MANGA", mangaHeaderSettings),
      );
    }

    if (pageName === "Favorites") anilistMainContainer.append(Favorites());

    if (pageName === "Stats") anilistMainContainer.append(Stats());
  });
}
