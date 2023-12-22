import responseDataInterface from "./responseDataInterface";

export default function AniList_API_AnimeMangaBanners(type: "ANIME" | "MANGA") {
  const query = `query($userId:Int,$userName:String,$type:MediaType){MediaListCollection(userId:$userId,userName:$userName,type:$type){lists{entries{...mediaListEntry}}}}fragment mediaListEntry on MediaList{media{title{userPreferred english}bannerImage}}`;

  const variables = {
    userId: 6482446,
    userName: "AlexEG",
    type: type,
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
      return response
        .json()
        .then((json: any) => (response.ok ? json : Promise.reject(json)));
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
