export default function TitleBarDATA() {
  const TitleBarDATA = new Promise((res, rej) => {
    res(JSON.parse(window.DATA.getJSONFileData("settings/titlebar")));
  });

  return TitleBarDATA;
}
