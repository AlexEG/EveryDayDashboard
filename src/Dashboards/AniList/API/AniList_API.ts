import responseDataInterface from "../helper/responseDataInterface";
import Anime from "./querys/Anime";
import AnimeDetailsData from "./querys/AnimeDetailsData";
import AnimeIdList from "./querys/AnimeIdList";
import AnimeList from "./querys/AnimeList";

type apiCallType = "ANIME" | "MANGA" | "AnimeIdList" | "animeDetailsData" | "AnimeList"
export default function AniList_API(type: apiCallType, variables: Record<string, string | number | boolean>) {


  let query

  if (type === "ANIME") query = Anime
  if (type === "AnimeIdList") query = AnimeIdList
  if (type === "animeDetailsData") query = AnimeDetailsData
  if (type === "AnimeList") query = AnimeList


  // const variables = {
  //   userId: 6482446,
  //   userName: "AlexEG",
  //   type: "ANIME",
  // };

  const url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };

  return new Promise((res, rej) => {
    // Make the HTTP Api request
    fetch(url, options)
      .then(handleResponse)
      .then(handleData)
      .catch(handleError);

    function handleResponse(response: any) {
      return response.json().then(function (json: any) {
        return response.ok ? json : Promise.reject(json);
      });
    }

    function handleData(data: responseDataInterface) {
      console.log(`AniList_API ${type}`, data);
      res(data);
    }



    function handleError(error: any) {
      console.error(error);
    }
  });
}
