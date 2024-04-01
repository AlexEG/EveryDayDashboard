import NotificationCard from "../../Notifications/NotificationCard";
import { Anime, Manga, notificationSettingsTypes } from "../../type";
import AniList_API from "../AniList_API";

export default function updateAnimeMangaList(
  userId: number,
  userName: string,
  type: "ANIME" | "MANGA",
  notificationsContainer: HTMLElement,
  notificationSettings: notificationSettingsTypes,
) {
  const variables = {
    userId: userId,
    userName: userName,
    type: type,
  };
  notificationsContainer.append(
    NotificationCard(`Checking for ${type} List`, notificationSettings),
  );

  // Favourites
  const variables2 = {
    userId: userId,
    userName: userName,
  } as const;
  const favouritesType = type === "ANIME" ? "FavouriteAnime" : "FavouriteManga";

  AniList_API(favouritesType, variables2)
    .then(({ data }: any) => {
      // console.log("API FavouritesArrayID: ", data);

      const favouritesArrayID: Array<number> = [];
      // const favouritesMangaArrayID: Array<number> = []

      const user = data.User;
      const favourites = user.favourites;
      // console.log("user: ", user);
      // console.log("favourites: ", favourites);

      if (type === "ANIME") {
        const animeArr = favourites.anime;
        for (const anime of animeArr.edges) {
          favouritesArrayID.push(anime.node.id);
        }
        // console.log("animeArr: ", animeArr);
      }

      if (type === "MANGA") {
        const mangaArr = favourites.manga;
        for (const manga of mangaArr.edges) {
          favouritesArrayID.push(manga.node.id);
        }
        // console.log("mangaArr: ", mangaArr);
      }

      // console.log("favouritesAnimeArrayID: ", favouritesArrayID);
      return favouritesArrayID;
    })
    .then((favouritesArrayID: Array<number>) => {
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
            const bannerURL = animeMangaData.media.bannerImage;
            const bannerImgFileName =
              bannerURL && bannerURL.match(/(?<=banner\/).*/);

            // cover image  note the large & extraLarge size have the same file name
            const coverURL1 = animeMangaData.media.coverImage.large;
            const coverURL2 = animeMangaData.media.coverImage.extraLarge;
            const coverImgFileNameLarge =
              coverURL1 && coverURL1.match(/(?<=medium\/).*/);
            const coverImgFileNameExtraLarge =
              coverURL2 && coverURL2.match(/(?<=large\/).*/);

            // title
            const titleUserPreferred = animeMangaData.media.title.userPreferred;
            const titleEnglish = animeMangaData.media.title.english;
            const title = titleEnglish ? titleEnglish : titleUserPreferred;

            // popularity  averageScore  status  genres  season startDate endDate
            const id = animeMangaData.media.id;
            const format = animeMangaData.media.format;
            const rankings = animeMangaData.media.rankings;
            const popularity = animeMangaData.media.popularity;
            const averageScore = animeMangaData.media.averageScore;
            const meanScore = animeMangaData.media.meanScore;
            const favourites = animeMangaData.media.favourites;
            const status = animeMangaData.media.status;
            const genres = animeMangaData.media.genres;
            const startDate = animeMangaData.media.startDate;
            const endDate = animeMangaData.media.endDate;
            const source = animeMangaData.media.source;
            const completedAt = animeMangaData.completedAt;
            const mediaId = animeMangaData.mediaId;
            const progress = animeMangaData.progress;
            const repeat = animeMangaData.repeat;
            const score = animeMangaData.score;
            const ListName = animeMangaData.status;
            const isFavourite: boolean = favouritesArrayID.includes(id);

            const completedAtStr = new Date(
              completedAt.year,
              completedAt.month,
              completedAt.day,
            )
              .toDateString()
              .slice(4)
              .split(" ");
            const startDateStr = new Date(
              startDate.year,
              startDate.month,
              startDate.day,
            )
              .toDateString()
              .slice(4)
              .split(" ");
            const endDateStr = new Date(
              endDate.year,
              endDate.month,
              endDate.day,
            )
              .toDateString()
              .slice(4)
              .split(" ");

            const newData: any = {
              ListName: ListName,
              id: id,
              mediaId: mediaId,
              isFavourite: isFavourite,
              progress: progress,
              repeat: repeat,
              score: score,
              bannerImgFileName: bannerImgFileName && bannerImgFileName[0],
              coverImgFileNameLarge:
                coverImgFileNameLarge && coverImgFileNameLarge[0],
              coverImgFileNameExtraLarge:
                coverImgFileNameExtraLarge && coverImgFileNameExtraLarge[0],
              title: title,
              popularity: popularity.toLocaleString(),
              averageScore: averageScore,
              meanScore: meanScore,
              favourites: favourites.toLocaleString(),
              status: `${status[0]}${status.slice(1).toLowerCase()}`,
              genres: genres,
              source: source
                .split("_")
                .map((word) => word[0] + word.slice(1).toLowerCase())
                .join(" "),
              format: format,
              rankings: rankings,
              completedAt: `${completedAtStr[0]} ${+completedAtStr[1] / 1}, ${
                completedAtStr[2]
              }`,
              startDate: `${startDateStr[0]} ${+startDateStr[1] / 1}, ${
                startDateStr[2]
              }`,
              endDate: `${endDateStr[0]} ${+endDateStr[1] / 1}, ${
                endDateStr[2]
              }`,
            };

            if (type === "ANIME") {
              const animeData: any = animeMangaData.media;
              const episodes = animeData.episodes;
              const season = animeData.season;
              newData.episodes = episodes;
              newData.season =
                season && `${season[0]}${season.slice(1).toLowerCase()}`;
              newData.seasonYear =
                season &&
                `${season[0]}${season.slice(1).toLowerCase()} ${
                  startDate.year
                }`;
            }

            if (type === "MANGA") {
              const mangaData: any = animeMangaData.media;
              const volumes = mangaData.volumes;
              const chapters = mangaData.chapters;
              newData.volumes = volumes;
              newData.chapters = chapters;
            }

            // console.log("bannerURL: ", bannerURL)
            // console.log("bannerImgFileName: ", bannerImgFileName)
            // console.log("newData: ", newData)
            updatedData.data.data.push(newData);
          }
        }
        updatedData.data.metadata["size"] = updatedData.data.data.length;
        updatedData.data.metadata["lastUpdate"] = new Date().toUTCString();

        // ----  ----  ---- //
        const offlineData = JSON.parse(
          //@ts-ignore-next-line
          window.DATA.getJSONFileData(
            `dashboards/anilist/${type.toLowerCase()}`,
          ),
        ).data.data;

        // console.log("updatedData: ", updatedData);
        // console.log("offlineData: ", offlineData);

        if (
          !(
            JSON.stringify(offlineData) ===
            JSON.stringify(updatedData.data.data)
          )
        ) {
          console.log("new data has been found");

          window.DATA.CreateOrUpdateJSON(
            `dashboards/anilist/${type.toLowerCase()}.json`,
            updatedData,
          );
          notificationsContainer.append(
            NotificationCard(
              `${type} Offline Data [Update Complete]`,
              notificationSettings,
            ),
          );
        } else
          notificationsContainer.append(
            NotificationCard(
              `Your ${type} List Offline Data is up-to-date`,
              notificationSettings,
            ),
          );
      });
    });
}
