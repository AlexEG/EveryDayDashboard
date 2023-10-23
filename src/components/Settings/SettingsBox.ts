import HTML from "../HTML/HTML";
import SettingsNavbar from "./settings-navbar/SettingsNavbar";
import SettingsTilebar from "./settings-titlebar/SettingsTilebar";
import SettingsHome from "./settings-home/SettingsHome";

export default function SettingsBox() {
  // const styles = "bg";
  const mainContainer = HTML(
    "div",
    "fixed top-0 z-40 h-full w-full",
    "settings-box"
  );
  const overlay = HTML(
    "div",
    "h-[calc(100%-31px)] w-full bg-black opacity-80 mt-[31px]"
  );
  const box = HTML(
    "div",
    "fixed left-1/2 top-1/2 h-96 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-slate-950"
  );
  mainContainer.append(overlay, box);

  // box.append(SettingsNavbar(), SettingsTilebar());
  box.append(SettingsNavbar(), SettingsHome());

  // console.log(mainContainer);
  return mainContainer;
}
