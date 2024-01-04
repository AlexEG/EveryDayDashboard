import AniList_API_Favourites from "../API/AniList_API_Favourites";

export default function updateFavouritesArrayID() {
  AniList_API_Favourites().then((data: any) => {
    console.log("API FavouritesArrayID: ", data);

    const newData: { data: { anime: number[], manga: number[] } } = {}


    const favouritesAnimeArrayID: number[] = []
    const favouritesMangaArrayID: number[] = []

    const user = data.data.User
    const favourites = user.favourites
    const animeArr = favourites.anime
    const mangaArr = favourites.manga

    for (const anime of animeArr.edges) {
      favouritesAnimeArrayID.push(anime.node.id)
    }

    for (const manga of mangaArr.edges) {
      favouritesMangaArrayID.push(manga.node.id)
    }

    console.log("user: ", user);
    console.log("favourites: ", favourites);
    console.log("animeArr: ", animeArr);

    console.log("favouritesAnimeArrayID: ", favouritesAnimeArrayID);
    console.log("favouritesMangaArrayID: ", favouritesMangaArrayID);

    newData.data = { anime: favouritesAnimeArrayID, manga: favouritesMangaArrayID }

    window.DATA.CreateOrUpdateJSON(
      "dashboards/anilist/favourites-array-id-data.json",
      newData
    );
  });
}
