import AniList_API_MangaListData from "./AniList_API_MangaListData";

interface mangaListData {
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
}

export default function updateMangaListData() {
  AniList_API_MangaListData().then((data: mangaListData) => {
    console.log("API MangaListData: ", data);

    const lists = data.data.MediaListCollection.lists;
    // console.log("lists: ", lists);

    const updatedData: any = {};
    updatedData.data = {};

    for (const list of lists) {
      updatedData.data[list.name] = list.entries;
    }

    console.log("updatedData: ", updatedData);

    window.DATA.CreateOrUpdateJSON(
      "dashboards/anilist/manga-list-data.json",
      updatedData
    );
  });
}
