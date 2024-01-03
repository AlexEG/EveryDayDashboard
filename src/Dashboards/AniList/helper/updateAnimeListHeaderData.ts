
import AniList_API_AnimeListHeaderData from "../API/AniList_API_AnimeListHeaderData";
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
            status: string
          };
        }[];
      }[];
    };
  };
}

export default function updateAnimeListHeaderData() {
  AniList_API_AnimeListHeaderData().then((data: animeListData) => {
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
        // console.log("animeMangaData: ", animeMangaData)

        // banner image
        const bannerURL = animeMangaData.media.bannerImage
        const bannerImgFileName = bannerURL && String(bannerURL.match(/(?<=banner\/).*/g))

        // cover image
        const coverURL = animeMangaData.media.coverImage.large
        const coverImgFileName = coverURL && String(coverURL.match(/(?<=medium\/).*/g))

        // title
        const titleUserPreferred = animeMangaData.media.title.userPreferred;
        const titleEnglish = animeMangaData.media.title.english;
        const title = titleEnglish ? titleEnglish : titleUserPreferred;

        // popularity  averageScore  status
        const popularity = animeMangaData.media.popularity
        const averageScore = animeMangaData.media.averageScore
        const status = animeMangaData.media.status


        const animeHeaderData = {
          bannerImgFileName: bannerImgFileName, coverImgFileName: coverImgFileName,
          title: title, popularity: popularity.toLocaleString(), averageScore: averageScore, status: status
        }
        // console.log("bannerURL: ", bannerURL)
        // console.log("bannerImgFileName: ", bannerImgFileName)
        // console.log("animeHeaderData: ", animeHeaderData)
        updatedData.data.data.push(animeHeaderData)
      }


    }
    updatedData.data.metadata["size"] = updatedData.data.data.length
    console.log("updatedData: ", updatedData);




    window.DATA.CreateOrUpdateJSON(
      "dashboards/anilist/anime-list-header-data.json",
      updatedData
    );
  });
}
