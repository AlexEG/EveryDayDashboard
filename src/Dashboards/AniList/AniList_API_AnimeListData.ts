import responseDataInterface from "./responseDataInterface";

export default function AniList_API_AnimeListData() {
  const query = `
  query($userId:Int,$userName:String,$type:MediaType){MediaListCollection(userId:$userId,userName:$userName,type:$type){lists{name entries{...mediaListEntry}}}}fragment mediaListEntry on MediaList{status score progress updatedAt startedAt{year month day}completedAt{year month day}media{title{userPreferred english}coverImage{extraLarge large}type format episodes averageScore popularity genres bannerImage startDate{year month day}}}
    `;

  const variables = {
    userId: 6482446,
    userName: "AlexEG",
    type: "ANIME",
  };

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
      // console.log("data", data);
      res(data);
    }

    function handleError(error: any) {
      console.error(error);
    }
  });
}
