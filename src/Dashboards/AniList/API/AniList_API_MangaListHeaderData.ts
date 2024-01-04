export default function AniList_API_MangaListHeaderData() {
  const query = `
  query($userId:Int,$userName:String,$type:MediaType){MediaListCollection(userId:$userId,userName:$userName,type:$type){lists{name entries{...mediaListEntry}}}}fragment mediaListEntry on MediaList{id mediaId status score repeat media{id title{userPreferred romaji english native}coverImage{extraLarge large} status(version:2) volumes chapters description averageScore popularity isAdult genres bannerImage startDate{year month day} endDate{year month day} source rankings{rank context}}}
    `;

  const variables = {
    userId: 6482446,
    userName: "AlexEG",
    type: "MANGA",
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
      return response.json().then(function (json: unknown) {
        return response.ok ? json : Promise.reject(json);
      });
    }

    function handleData(data: unknown) {
      console.log("data", data);
      res(data);
    }

    function handleError(error: unknown) {
      console.error(error);
    }
  });
}
