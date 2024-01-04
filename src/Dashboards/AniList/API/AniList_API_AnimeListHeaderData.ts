import responseDataInterface from "../helper/responseDataInterface";

export default function AniList_API_AnimeListHeaderData() {
  const query = `
  query($userId:Int,$userName:String,$type:MediaType){MediaListCollection(userId:$userId,userName:$userName,type:$type){lists{name entries{...mediaListEntry}}}}fragment mediaListEntry on MediaList{id mediaId status score repeat media{id title{userPreferred romaji english native}coverImage{extraLarge large} format status(version:2) episodes description averageScore popularity duration isAdult genres bannerImage season startDate{year month day} endDate{year month day}}}
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
