export default function SidebarrDATA() {
  const SidebarrDATA = new Promise((res, rej) => {
    res(JSON.parse(window.DATA.getJSONFileData("settings/sidebar")));
  });

  return SidebarrDATA;
}
