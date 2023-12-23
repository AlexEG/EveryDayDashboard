import AniList_API_AnimeListData from "./AniList_API_AnimeListData";
interface animeListData {
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

export default function updateAnimeListData() {
  AniList_API_AnimeListData().then((data: animeListData) => {
    console.log("API AnimeListData: ", data);

    const lists = data.data.MediaListCollection.lists;
    // console.log("lists: ", lists);

    const updatedData = {};
    updatedData.data = {};

    for (const list of lists) {
      updatedData.data[list.name] = list.entries;
    }

    console.log("updatedData: ", updatedData);

    window.DATA.CreateOrUpdateJSON(
      "dashboards/anilist/anime-list-data.json",
      updatedData
    );
  });
}
