import AniList_API_Favourites from "../API/AniList_API_Favourites";

export default function updateFavourites() {
  AniList_API_Favourites().then((data) => {
    console.log("API FavouritesData: ", data);

    window.DATA.CreateOrUpdateJSON(
      "dashboards/anilist/favourites-data.json",
      data
    );
  });
}
