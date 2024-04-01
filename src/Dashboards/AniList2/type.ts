// * SETTINGS *//
export type anilistSettingsDataTypes = {
  data: {
    readonly userId: number;
    readonly userName: string;
    readonly defaultHomePage: string;
    readonly filterIsOpenByDefault: boolean;
    theme: {
      selectedBuiltInTheme:
        | "slate"
        | "neutral"
        | "red"
        | "orange"
        | "lime"
        | "green"
        | "emerald"
        | "teal"
        | "cyan"
        | "sky"
        | "blue"
        | "indigo"
        | "violet"
        | "purple"
        | "pink"
        | "rose";
      randomBuiltInThemeOnStartup: boolean;
      customTheme: {
        backgroundColor: string;
        scrollbarThumbColor: string;
      };
    };
    autoUpdateOfflineData: AutoUpdateOfflineData;
    notification: notificationSettingsTypes;
    pages: {
      anime: animePageTypes;
      manga: mangaPageTypes;
    };
  };
};

export type notificationSettingsTypes = {
  readonly isEnabled: boolean;
  readonly isAnimationsEnabled: boolean;
  readonly notificationAnimationTime: number;
};

export type AutoUpdateOfflineData = {
  checkThenUpdate: {
    anime: {
      readonly allAnimeDetailsData: boolean;
      readonly animeList: boolean;
      readonly animeBanners: boolean;
      readonly animeCoverImageExtraLargeSize: boolean;
      readonly animeCoverImageLargeSize: boolean;
    };
    manga: {
      readonly allMangaDetailsData: boolean;
      readonly mangaList: boolean;
      readonly mangaBanners: boolean;
      readonly mangaCoverImageExtraLargeSize: boolean;
      readonly mangaCoverImageLargeSize: boolean;
    };
  };
};

export type animePageTypes = {
  header: animeHeaderTypes;
  lists: {
    readonly listsOrder: Array<string>;
  };
};
export type mangaPageTypes = {
  header: mangaHeaderTypes;
  lists: {
    readonly listsOrder: Array<string>;
  };
};

export type animeHeaderTypes = {
  readonly isInfoHeaderEnabled: boolean;
  readonly autoSwitchBanner: boolean;
  readonly isAutoSwitchBannerRandomly: boolean;
  readonly switchingSpeed: number;
  readonly seasonWithYear: boolean;
  infoBanner: animeHeaderInfoBannerTypes;
};

export type mangaHeaderTypes = {
  readonly isInfoHeaderEnabled: boolean;
  readonly autoSwitchBanner: boolean;
  readonly isAutoSwitchBannerRandomly: boolean;
  readonly switchingSpeed: number;
  infoBanner: mangaHeaderInfoBannerTypes;
};

export type animeHeaderInfoBannerTypes = {
  readonly popularity: boolean;
  readonly averageScore: boolean;
  readonly meanScore: boolean;
  readonly favourites: boolean;
  readonly status: boolean;
  readonly episodes: boolean;
  readonly season: boolean;
  readonly startDate: boolean;
  readonly source: boolean;
  readonly endDate: boolean;
  readonly genres: boolean;
};
export type mangaHeaderInfoBannerTypes = {
  readonly popularity: boolean;
  readonly averageScore: boolean;
  readonly meanScore: boolean;
  readonly favourites: boolean;
  readonly status: boolean;
  readonly volumes: boolean;
  readonly chapters: boolean;
  readonly source: boolean;
  readonly startDate: boolean;
  readonly endDate: boolean;
  readonly genres: boolean;
};

// AniList API

export type Anime = {
  data: {
    MediaListCollection: {
      lists: {
        name: string;
        entries: {
          mediaId: number;
          status: string;
          score: number;
          repeat: number;
          progress: number;
          startedAt: { year: number; month: number; day: number };
          completedAt: { year: number; month: number; day: number };
          media: {
            id: number;
            title: {
              userPreferred: string;
              english: string;
            };
            coverImage: {
              extraLarge: string;
              large: string;
            };
            format: string;
            status: string;
            episodes: number;
            duration: number;
            averageScore: number;
            popularity: number;
            meanScore: number;
            favourites: number;
            genres: string[];
            source: string;
            season: string;
            bannerImage: string;
            startDate: { year: number; month: number; day: number };
            endDate: { year: number; month: number; day: number };
            rankings: { rank: number; context: string };
          };
        }[];
      }[];
    };
  };
};
export type Manga = {
  data: {
    MediaListCollection: {
      lists: {
        name: string;
        entries: {
          id: number;
          mediaId: number;
          status: string;
          score: number;
          repeat: number;
          progress: number;
          updatedAt: number;
          startedAt: { year: number; month: number; day: number };
          completedAt: { year: number; month: number; day: number };
          media: {
            id: number;
            title: {
              userPreferred: string;
              english: string;
            };
            coverImage: {
              extraLarge: string;
              large: string;
            };
            format: string;
            status: string;
            volumes: string;
            chapters: string;
            averageScore: number;
            popularity: number;
            meanScore: number;
            favourites: number;
            genres: string[];
            source: string;
            bannerImage: string;
            startDate: { year: number; month: number; day: number };
            endDate: { year: number; month: number; day: number };
            rankings: { rank: number; context: string };
          };
        }[];
      }[];
    };
  };
};

export type AnimeList = {
  data: {
    MediaListCollection: {
      lists: {
        name: string;
        entries: {
          status: string;
          score: number;
          progress: number;
          startedAt: { year: number; month: number; day: number };
          completedAt: { year: number; month: number; day: number };
          media: {
            title: {
              userPreferred: string;
              english: string;
            };
            coverImage: {
              extraLarge: string;
              large: string;
            };
            format: string;
            episodes: number;
            averageScore: number;
            popularity: number;
            genres: string[];
            bannerImage: string;
            startDate: { year: number; month: number; day: number };
          };
        }[];
      }[];
    };
  };
};

export type AnimeIdList = {
  data: {
    MediaListCollection: {
      lists: {
        entries: {
          media: {
            id: number;
          };
        }[];
      }[];
    };
  };
};

export type Banners = {
  data: {
    MediaListCollection: {
      lists: {
        entries: {
          media: {
            title: {
              userPreferred: string;
              english: string;
            };
            bannerImage: string;
          };
        }[];
      }[];
    };
  };
};
