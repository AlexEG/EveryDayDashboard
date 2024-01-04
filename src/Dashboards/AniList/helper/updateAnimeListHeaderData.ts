
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
            id: number,
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
            endDate: { year: number; month: number; day: number };
            status: string;
            season: string
            isFavourite: boolean
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

        // popularity  averageScore  status  genres  season startDate endDate
        const id = animeMangaData.media.id
        const popularity = animeMangaData.media.popularity
        const averageScore = animeMangaData.media.averageScore
        const status = animeMangaData.media.status
        const genres = animeMangaData.media.genres
        const episodes = animeMangaData.media.episodes
        const season = animeMangaData.media.season
        const startDate = animeMangaData.media.startDate
        const endDate = animeMangaData.media.endDate


        const animeHeaderData = {
          id: id,
          bannerImgFileName: bannerImgFileName,
          coverImgFileName: coverImgFileName,
          title: title,
          popularity: popularity.toLocaleString(),
          averageScore: averageScore,
          status: `${status[0]}${status.slice(1).toLowerCase()}`,
          genres: genres,
          episodes: episodes,
          season: `${season[0]}${season.slice(1).toLowerCase()}`,
          startDate: new Date(startDate.year, startDate.month, startDate.day).toDateString().slice(4).replace(" 2", ", 2"),
          endDate: new Date(endDate.year, endDate.month, endDate.day).toDateString().slice(4).replace(" 2", ", 2") || "",
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
