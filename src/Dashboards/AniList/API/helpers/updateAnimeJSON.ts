import { Anime } from "../../type";
import AniList_API from "../AniList_API";

type AnimeData = {
  data: {
    metadata: {
      size: number
    },
    data:
    {
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

  }
}

export default function updateAnimeJSON() {
  AniList_API("ANIME").then((data: Anime) => {
    // console.log("API AnimeListData: ", data);
    const lists = data.data.MediaListCollection.lists;

    const AnimeData: AnimeData = {
      data: {
        metadata: {
          size: 0
        },
        data: []
      }
    }

    const AllAnime = AnimeData.data.data



    for (const list of lists) {
      AllAnime.push(...list.entries);
    }

    AnimeData.data.metadata.size = AllAnime.length

    console.log("AnimeData: ", AnimeData);

    window.DATA.CreateOrUpdateJSON(
      "dashboards/anilist/anime.json",
      AnimeData
    );
  });
}
