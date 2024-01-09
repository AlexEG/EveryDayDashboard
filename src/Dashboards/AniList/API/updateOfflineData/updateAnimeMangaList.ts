import NotificationCard from "../../Notifications/NotificationCard";
import { Anime, Manga, notificationSettingsTypes } from "../../type";
import AniList_API from "../AniList_API";

export default function updateAnimeMangaList(
  type: "ANIME" | "MANGA",
  notificationsContainer: HTMLElement,
  notificationSettings: notificationSettingsTypes
) {
  const variables = {
    userId: 6482446,
    userName: "AlexEG",
    type: type,
  } as const
  notificationsContainer.append(
    NotificationCard(`Checking for ${type} List`, notificationSettings)
  );

  // Favourites
  const variables2 = {
    id: 6482446,
    name: "AlexEG",
  } as const

  const favouritesType = type === "ANIME" ? "FavouriteAnime" : "FavouriteManga"
  AniList_API(favouritesType, variables2).then(({ data }) => {
    // console.log("API FavouritesArrayID: ", data);




    const favouritesArrayID: Array<number> = []
    // const favouritesMangaArrayID: Array<number> = []

    const user = data.User
    const favourites = user.favourites
    // console.log("user: ", user);
    // console.log("favourites: ", favourites);

    if (type === "ANIME") {
      const animeArr = favourites.anime
      for (const anime of animeArr.edges) {
        favouritesArrayID.push(anime.node.id)
      }
      // console.log("animeArr: ", animeArr);
    }

    if (type === "MANGA") {
      const mangaArr = favourites.manga
      for (const manga of mangaArr.edges) {
        favouritesArrayID.push(manga.node.id)
      }
      // console.log("mangaArr: ", mangaArr);
    }

    // console.log("favouritesAnimeArrayID: ", favouritesArrayID);





    //
    setTimeout(() => {
      AniList_API(type, variables).then(({ data }: Anime | Manga) => {


        const lists = data.MediaListCollection.lists;
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
            const format = animeMangaData.media.format
            const rankings = animeMangaData.media.rankings
            const popularity = animeMangaData.media.popularity
            const averageScore = animeMangaData.media.averageScore
            const status = animeMangaData.media.status
            const genres = animeMangaData.media.genres
            const startDate = animeMangaData.media.startDate
            const endDate = animeMangaData.media.endDate
            const source = animeMangaData.media.source
            const completedAt = animeMangaData.completedAt
            const mediaId = animeMangaData.mediaId
            const progress = animeMangaData.progress
            const repeat = animeMangaData.repeat
            const score = animeMangaData.score
            const ListName = animeMangaData.status
            const isFavourite: boolean = favouritesArrayID.includes(id)


            const completedAtStr = new Date(completedAt.year, completedAt.month, completedAt.day).toDateString().slice(4).split(" ")
            const startDateStr = new Date(startDate.year, startDate.month, startDate.day).toDateString().slice(4).split(" ")
            const endDateStr = new Date(endDate.year, endDate.month, endDate.day).toDateString().slice(4).split(" ")

            const newData: any = {
              ListName: ListName,
              id: id,
              mediaId: mediaId,
              isFavourite: isFavourite,
              progress: progress,
              repeat: repeat,
              score: score,
              bannerImgFileName: bannerImgFileName,
              coverImgFileName: coverImgFileName,
              title: title,
              popularity: popularity.toLocaleString(),
              averageScore: averageScore,
              status: `${status[0]}${status.slice(1).toLowerCase()}`,
              genres: genres,
              source: source,
              format: format,
              rankings: rankings,
              completedAt: `${completedAtStr[0]} ${+completedAtStr[1] / 1}, ${completedAtStr[2]}`,
              startDate: `${startDateStr[0]} ${+startDateStr[1] / 1}, ${startDateStr[2]}`,
              endDate: `${endDateStr[0]} ${+endDateStr[1] / 1}, ${endDateStr[2]}`,
            }


            if (type === "ANIME") {
              const animeData: any = animeMangaData.media
              const episodes = animeData.episodes
              const season = animeData.season
              newData.episodes = episodes
              newData.season = `${season[0]}${season.slice(1).toLowerCase()}`
            }

            if (type === "MANGA") {
              const mangaData: any = animeMangaData.media
              const volumes = mangaData.volumes
              const chapters = mangaData.chapters
              newData.volumes = volumes
              newData.chapters = chapters
            }

            // console.log("bannerURL: ", bannerURL)
            // console.log("bannerImgFileName: ", bannerImgFileName)
            // console.log("newData: ", newData)
            updatedData.data.data.push(newData)
          }


        }
        updatedData.data.metadata["size"] = updatedData.data.data.length
        updatedData.data.metadata["lastUpdate"] = new Date().toUTCString()

        // ----  ----  ---- //
        const offlineData = JSON.parse(window.DATA.getJSONFileData(
          `dashboards/anilist/${type.toLowerCase()}`
        )).data.data

        // console.log("updatedData: ", updatedData);
        // console.log("offlineData: ", offlineData);

        if (!(JSON.stringify(offlineData) === JSON.stringify(updatedData.data.data))) {
          console.log("new data has been found")


          window.DATA.CreateOrUpdateJSON(
            `dashboards/anilist/${type.toLowerCase()}.json`,
            updatedData
          );
          notificationsContainer.append(
            NotificationCard(
              `${type} Offline Data [Update Complete]`,
              notificationSettings
            ))
        } else
          notificationsContainer.append(
            NotificationCard(
              `Your ${type} List Offline Data is up-to-date`,
              notificationSettings
            )
          );
      });
    }, 2_000);

  });

}
