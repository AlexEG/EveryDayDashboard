import SettingsNavTab from "./SettingsNavTab";
import CloseSettingBtn from "./CloseSettingBtn";
import HTML from "../../HTML/HTML";

import SettingsHome from "../Home/SettingsHome";
import SettingsTilebar from "../settings-titlebar/SettingsTilebar";

export default function SettingsNavbar() {
  const container = HTML(
    "div",
    "relative flex h-9 w-full bg-slate-900 flex justify-between",
    "settingsNavBar"
  );
  const styles = "flex ";
  const tabsWrapper = HTML("div", styles, "settings-box--tabs-wrapper");

  tabsWrapper.append(
    SettingsNavTab("Home", SettingsHome()),
    SettingsNavTab("TitleBar", SettingsTilebar())
    // SettingsNavTab("Sidebar"),
    // SettingsNavTab("Calendar"),
    // SettingsNavTab("Backup/Restore")
  );

  tabsWrapper.children[0].classList.add("before:bg-violet-600");
  container.append(tabsWrapper, CloseSettingBtn());
  return container;
}
