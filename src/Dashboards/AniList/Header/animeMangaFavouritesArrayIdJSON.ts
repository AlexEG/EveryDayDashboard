export default function animeMangaFavouritesArrayIdJSON() {
  return new Promise((res, rej) => {
    res(
      JSON.parse(
        window.DATA.getJSONFileData("dashboards/anilist/favourites-array-id-data")
      )
    );
  });
}