export default interface responseDataInterface {
  data: {
    User: {
      about: null | string;
      avatar: {
        large: string;
      };
      bannerImage: null | string;
      bans: [];
      createdAt: number;
      donatorBadge: string;
      donatorTier: number;
      favourites: {
        anime: {
          edges: {
            favouriteOrder: number;
            node: {
              bannerImage: string;
              coverImage: { large: string };
              format: string;
              id: number;
              isAdult: boolean;
              startDate: { year: number };
              status: string;
              title: { userPreferred: string };
              type: "ANIME";
            };
          }[];
        };
        characters: {
          edges: [];
        };
        manga: {
          edges: {
            favouriteOrder: number;
            node: {
              bannerImage: string;
              coverImage: { large: string };
              format: string;
              id: number;
              isAdult: boolean;
              startDate: { year: number };
              status: string;
              title: { userPreferred: string };
              type: "MANGA";
            };
          }[];
        };
        staff: {
          edges: [];
        };
        studios: {
          edges: [];
        };
      };
      id: number;
      isBlocked: boolean;
      isFollower: boolean;
      isFollowing: boolean;
      mediaListOptions: {
        scoreFormat: string;
      };
      moderatorRoles: null;
      name: string;
      options: {
        profileColor: string;
        restrictMessagesToFollowing: boolean;
      };
      previousNames: [];
      statistics: {
        anime: {
          count: number;
          episodesWatched: number;
          genrePreview: [];
          meanScore: number;
          minutesWatched: number;
          standardDeviation: number;
        };
        manga: {
          chaptersRead: number;
          count: number;
          genrePreview: { genre: string; count: number }[];
          meanScore: number;
          standardDeviation: number;
          volumesRead: number;
        };
      };
      stats: {
        activityHistory: { date: number; amount: number; level: number };
      };
    };
  };
}
