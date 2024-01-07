export default function ListHeaderDataJSON(type: "anime" | "manga") {
  return new Promise((res, rej) => {
    res(
      JSON.parse(
        window.DATA.getJSONFileData(`dashboards/anilist/${type}-list-header-data`)
      )
    );
  });
}