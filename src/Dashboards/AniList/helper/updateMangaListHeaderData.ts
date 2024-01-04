
import AniList_API_MangaListHeaderData from "../API/AniList_API_MangaListHeaderData";

interface mangaListData {
  data: {
    MediaListCollection: {
      lists: {
        name: string;
        entries: {
          status: string;
          score: number;
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
            volumes: number | null;
            chapters: number | null;
            averageScore: number;
            popularity: number;
            genres: string[];
            bannerImage: string;
            startDate: { year: number; month: number; day: number };
            endDate: { year: number; month: number; day: number };
            status: string;
            source: string;
          };
        }[];
      }[];
    };
  };
}

export default function updateMangaListHeaderData() {
  AniList_API_MangaListHeaderData().then((data: mangaListData) => {
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
        const volumes = animeMangaData.media.volumes
        const chapters = animeMangaData.media.chapters
        const source = animeMangaData.media.source
        const startDate = animeMangaData.media.startDate
        const endDate = animeMangaData.media.endDate

        const startDateStr = new Date(startDate.year, startDate.month, startDate.day).toDateString().slice(4).split(" ")
        const endDateStr = new Date(endDate.year, endDate.month, endDate.day).toDateString().slice(4).split(" ")

        const animeHeaderData = {
          id: id,
          bannerImgFileName: bannerImgFileName,
          coverImgFileName: coverImgFileName,
          title: title,
          popularity: popularity.toLocaleString(),
          averageScore: averageScore,
          status: `${status[0]}${status.slice(1).toLowerCase()}`,
          source: `${source[0]}${source.slice(1).toLowerCase()}`,
          genres: genres,
          volumes: volumes,
          chapters: chapters,
          startDate: `${startDateStr[0]} ${+startDateStr[1] / 1}, ${startDateStr[2]}`,
          endDate: `${endDateStr[0]} ${+endDateStr[1] / 1}, ${endDateStr[2]}`,
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
      "dashboards/anilist/manga-list-header-data.json",
      updatedData
    );
  });
}
