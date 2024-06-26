import FavouriteAnime from "./querys/FavouriteAnime";

export default function AniList_API_Favourites() {
  const query = FavouriteAnime;
  // const query = `query($id:Int,$name:String){User(id:$id,name:$name){  favourites{anime{edges{node{id type status(version:2)format bannerImage title{userPreferred}coverImage{large}startDate{year}}}}manga{edges{node{id type format bannerImage title{userPreferred}coverImage{large}startDate{year}}}}characters{edges{node{id name{userPreferred}image{large}}}}staff{edges{node{id name{userPreferred}image{large}}}}studios{edges{node{id name}}}}}}`;

  const variables = {
    id: 6482446,
    name: "AlexEG",
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

    function handleData(data: any) {
      console.log("data", data);
      res(data);
    }

    function handleError(error: any) {
      console.error(error);
    }
  });
}
