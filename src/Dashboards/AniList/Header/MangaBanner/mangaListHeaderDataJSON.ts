export default function mangaListHeaderDataJSON() {
  return new Promise((res, rej) => {
    res(
      JSON.parse(
        window.DATA.getJSONFileData("dashboards/anilist/manga-list-header-data")
      )
    );
  });
}