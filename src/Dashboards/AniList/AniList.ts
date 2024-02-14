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
import builtInThemesStyles from "./themes/builtInThemesStyles";
import {
  anilistSettingsDataTypes,
  animeHeaderTypes,
  mangaHeaderTypes,
} from "./type";
import ScrollbarStyles from "./utils/ScrollbarStyles";

export default function AniList() {
  const styles =
    "border h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-black border-t border-l border-neutral-400 py-4 pl-4 pr-3 overflow-y-auto relative after:absolute after:inset-0 after:-z-50";
  const MainContainer = HTML("main", styles, "anilist");

  const className = "mx-1 text-white my-2 p-2 text-center bg-black flex";
  // console.log(getComputedStyle(MainContainer))
  console.log(className);

  anilistSettingsData().then(({ data }: anilistSettingsDataTypes) => {
    //***  Theme ***//

    // const styles3 = "";

    /**               400              700
     * slate     rgb(148,163,184)   rgb(51,65,85)
     * neutral   rgb(163,163,163)   rgb(64,64,64)
     * red       rgb(248,113,113)   rgb(185,28,28)
     * orange    rgb(251,146,60)    rgb(194,65,12)
     * lime      rgb(163,230,53)    rgb(77,124,15)
     * green     rgb(74,222,128)    rgb(21,128,61)
     * emerald   rgb(52,211,153)    rgb(4,120,87)
     * teal      rgb(45,212,191)    rgb(15,118,110)
     * cyan      rgb(34,211,238)    rgb(14,116,144)
     * sky       rgb(56,189,248)    rgb(3,105,161)
     * blue      rgb(96,165,250)    rgb(29,78,216)
     * indigo    rgb(129,140,248)   rgb(67,56,202)
     * violet    rgb(167,139,250)   rgb(109,40,217)
     * purple    rgb(192,132,252)   rgb(126,34,206)
     * pink      rgb(244,114,182)   rgb(190,24,93)
     * rose      rgb(251,113,133)   rgb(190,18,60)
     */

    const theme = data.theme;
    const selectedBuiltInTheme = theme.selectedBuiltInTheme;
    const randomBuiltInThemeOnStartup = theme.selectedBuiltInTheme;
    const builtInThemes = builtInThemesStyles();

    type ThemeStyles = {
      backgroundColor: string;
      scrollBarThumbColor: string;
      bannerImageDropShadow: string;
      infoBanner: {
        titleColor: string;
        titleDropShadow: string;
        coverImgDropShadow: string;
      };
      navBarLinks: {
        containerBorderColor: string;
        navLinks: {
          isOpenStyles: string;
          normal: string;
        };
      };
      gridListToggleLayout: {
        containerBorderColor: string;
        isSelectedStyles: string;
      };
      filter: {
        toggleBtn: {
          containerBorderColor: string;
          isOpenStyles: string;
        };
        pageFilter: {
          containerBorderColor: string;
        };
      };
      lists: {
        containerBorderColor: string;
        listTitle: {
          textColor: string;
          numberOfItemsCircle: string;
        };
        listHeadRowTextColor: string;
        itemStyles: string;
      };
    };
    const builtInThemesName = [
      "slate",
      "neutral",
      "red",
      "orange",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "pink",
      "rose",
    ] as const;
    const themeStyles: ThemeStyles = randomBuiltInThemeOnStartup
      ? builtInThemes[
          builtInThemesName[
            Math.floor(Math.random() * builtInThemesName.length)
          ]
        ]
      : builtInThemes[selectedBuiltInTheme];
    const {
      backgroundColor: backgroundColorTheme,
      scrollBarThumbColor,
      bannerImageDropShadow,
      infoBanner: infoBannerTheme,
      navBarLinks: navBarLinksTheme,
      gridListToggleLayout: gridListToggleLayoutTheme,
      filter: filterTheme,
      lists: listsTheme,
    } = themeStyles;

    // console.log("builtInThemes: ", builtInThemes);
    // console.log("themeStyles: ", themeStyles);

    // MainContainer accent background color
    MainContainer.classList.add(backgroundColorTheme);
    // Scrollbar Thumb Color
    // ------------------------------
    // ------------------------------
    MainContainer.append(ScrollbarStyles(scrollBarThumbColor));
    //***  Theme [END] ***//

    // console.log("AniList Settings Data", data)
    const defaultHomePage = data.defaultHomePage as
      | "Overview"
      | "Anime"
      | "Manga"
      | "Favorites"
      | "Stats";
    const filterIsOpenByDefault = data.filterIsOpenByDefault;
    const pages = data.pages;
    //    ^?

    const animePage = pages.anime;
    const mangaPage = pages.manga;

    // header
    const animeHeaderSettings = animePage.header as animeHeaderTypes;
    const mangaHeaderSettings = mangaPage.header as mangaHeaderTypes;

    // auto Update Offline Data
    const autoUpdateOfflineData = data.autoUpdateOfflineData;

    // Notification
    const notificationSettings = data.notification;

    // userId userName
    const userId = data.userId;
    const userName = data.userName;
    // pages settings
    const animeLists = animePage.lists;
    const mangaLists = mangaPage.lists;

    // --------- --------- --------- --------- //
    {
      if (defaultHomePage === "Overview")
        MainContainer.append(HomeBanner(), Overview());
      else if (defaultHomePage === "Anime") {
        MainContainer.append(
          AnimeMangaHeader(
            "ANIME",
            animeHeaderSettings,
            bannerImageDropShadow,
            infoBannerTheme,
          ),
          AnimeMangaPage(
            "ANIME",
            animeLists,
            filterIsOpenByDefault,
            filterTheme.pageFilter,
            listsTheme,
          ),
        );
      } else if (defaultHomePage === "Manga") {
        MainContainer.append(
          AnimeMangaHeader(
            "MANGA",
            mangaHeaderSettings,
            bannerImageDropShadow,
            infoBannerTheme,
          ),
          AnimeMangaPage(
            "MANGA",
            mangaLists,
            filterIsOpenByDefault,
            filterTheme.pageFilter,
            listsTheme,
          ),
        );
      } else if (defaultHomePage === "Favorites")
        MainContainer.append(HomeBanner(), Favorites());
      else if (defaultHomePage === "Stats")
        MainContainer.append(HomeBanner(), Stats());
      else
        console.error(
          "DATA/setting/anilist.json  defaultHomePage not found or not selected",
        );
    }

    MainContainer.insertBefore(
      NavBar(
        defaultHomePage,
        filterIsOpenByDefault,
        navBarLinksTheme,
        gridListToggleLayoutTheme,
        filterTheme.toggleBtn,
      ),
      MainContainer.lastChild,
    );

    if (notificationSettings.isEnabled)
      MainContainer.append(
        NotificationsCenter(
          userId,
          userName,
          notificationSettings,
          autoUpdateOfflineData,
        ),
      );
  });
  return MainContainer;
}
