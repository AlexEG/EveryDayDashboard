export default function SettingsHomeDATA() {
  return new Promise((res, rej) => {
    res(JSON.parse(window.DATA.getJSONFileData("settings/home")));
  });
}
