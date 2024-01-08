// * SETTINGS *//
export type anilistSettingsDataTypes = {
  data: {
    readonly defaultHomePage: string,
    readonly filterIsOpenByDefault: boolean,
    notification: notificationSettingsTypes,
    pages: {
      anime: animePageTypes
      manga: mangaPageTypes
    }
  }
}

export type notificationSettingsTypes = {
  readonly isEnabled: boolean
  readonly isAnimationsEnabled: boolean
  readonly notificationTotalShowTime: number
  readonly animationEnterDurationTime: number
  readonly animationOutDurationTime: number
}

export type animePageTypes = {
  header: animeHeaderTypes
}
export type mangaPageTypes = {
  header: mangaHeaderTypes
}

export type animeHeaderTypes = {
  readonly isInfoHeaderEnabled: boolean
  readonly autoSwitchBanner: boolean
  readonly isAutoSwitchBannerRandomly: boolean
  readonly switchingSpeed: number
  readonly seasonWithYear: boolean
  infoBanner: animeHeaderInfoBannerTypes
}

export type mangaHeaderTypes = {
  readonly isInfoHeaderEnabled: boolean
  readonly autoSwitchBanner: boolean
  readonly isAutoSwitchBannerRandomly: boolean
  readonly switchingSpeed: number
  infoBanner: mangaHeaderInfoBannerTypes
}

export type animeHeaderInfoBannerTypes = {
  readonly popularity: boolean
  readonly averageScore: boolean
  readonly status: boolean
  readonly episodes: boolean
  readonly season: boolean
  readonly startDate: boolean
  readonly endDate: boolean
  readonly genres: boolean
}
export type mangaHeaderInfoBannerTypes = {
  readonly popularity: boolean
  readonly averageScore: boolean
  readonly status: boolean
  readonly volumes: boolean
  readonly chapters: boolean
  readonly source: boolean
  readonly startDate: boolean
  readonly endDate: boolean
  readonly genres: boolean
}


// AniList API



export type Anime = {
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
            type: "ANIME";
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
}

export type AnimeIdList = {
  data: {
    MediaListCollection: {
      lists: {
        entries: {
          media: {
            id: number
          };
        }[];
      }[];
    };
  };
}