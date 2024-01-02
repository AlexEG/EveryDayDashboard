export default function animeListHeaderDataJSON() {
  return new Promise((res, rej) => {
    res(
      JSON.parse(
        window.DATA.getJSONFileData("dashboards/anilist/anime-list-header-data")
      )
    );
  });
}