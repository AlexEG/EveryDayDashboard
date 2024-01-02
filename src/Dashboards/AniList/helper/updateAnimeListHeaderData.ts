import AniList_API_AnimeListData from "../API/AniList_API_AnimeListData";
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

export default function updateAnimeListHeaderData() {
  AniList_API_AnimeListData().then((data: animeListData) => {
    console.log("API AnimeListHeaderData: ", data);

    const lists = data.data.MediaListCollection.lists;
    // console.log("lists: ", lists);

    const updatedData: any = {};

    updatedData.data = {};
    updatedData.data.metadata = {};
    updatedData.data.data = [];


    for (const list of lists) {
      // console.log("list: ", list);

      for (const animeMangaData of list.entries) {
        console.log("animeMangaData: ", animeMangaData)
        const bannerURL = animeMangaData.media.bannerImage
        const bannerImgFileName = bannerURL && String(bannerURL.match(/(?<=banner\/).*/g))
        const titleUserPreferred = animeMangaData.media.title.userPreferred;
        const titleEnglish = animeMangaData.media.title.english;

        const title = titleEnglish ? titleEnglish : titleUserPreferred;
        const animeHeaderData = {
          bannerImgFileName: bannerImgFileName,
          title: title
        }
        // console.log("bannerURL: ", bannerURL)
        // console.log("bannerImgFileName: ", bannerImgFileName)
        console.log("animeHeaderData: ", animeHeaderData)
        updatedData.data.data.push(animeHeaderData)
      }


    }
    updatedData.data.metadata["size"] = updatedData.data.data.length
    console.log("updatedData: ", updatedData);



    // const bannerURLs = []
    // for (const [, listItems] of Object.entries(updatedData.data)) {
    //   // console.log("listItems: ", listItems)

    //   for (const animeMangaData of listItems) {
    //     // console.log("animeMangaData: ", animeMangaData)
    //     const bannerURL = animeMangaData.media.bannerImage
    //     const bannerImgFileName = bannerURL && bannerURL.match(/(?<=banner\/).*/g)
    //     bannerURLs.push(String(bannerImgFileName))

    //     // console.log("bannerURL: ", bannerURL)
    //     // console.log("bannerImgFileName: ", bannerImgFileName)
    //   }
    // }
    // console.log("bannerURLs: ", bannerURLs)

    window.DATA.CreateOrUpdateJSON(
      "dashboards/anilist/anime-list-header-data.json",
      updatedData
    );
  });
}
