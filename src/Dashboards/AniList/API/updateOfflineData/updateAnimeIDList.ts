import { AnimeIdList } from "../../type";
import AniList_API from "../AniList_API";


export default function updateAnimeIDList() {
  const variables = {
    userId: 6482446,
    userName: "AlexEG",
    type: "ANIME",
  };
  AniList_API("AnimeIdList", variables).then((data: AnimeIdList) => {
    // console.log("API AnimeListData: ", data);
    const lists = data.data.MediaListCollection.lists;

    const AnimeData: any = {
      data: {
        metadata: {
          size: 0
        },
        data: []
      }
    }

    const AllAnimeId = AnimeData.data.data

    for (const list of lists) {
      for (const animeID of list.entries) {
        AllAnimeId.push(animeID.media.id);
      }
    }

    AnimeData.data.metadata.size = AllAnimeId.length

    console.log("AnimeData: ", AnimeData);

    window.DATA.CreateOrUpdateJSON(
      "dashboards/anilist/anime-id-list.json",
      AnimeData
    );
  });
}
