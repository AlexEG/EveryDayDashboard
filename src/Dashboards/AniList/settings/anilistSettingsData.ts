export default function anilistSettingsData() {
  return new Promise((res, rej) => {
    res(JSON.parse(window.DATA.getJSONFileData("settings/anilist")));
  });
}
