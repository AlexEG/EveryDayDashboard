import SettingsNavTab from "./SettingsNavTab";
import CloseSettingBtn from "./CloseSettingBtn";
import HTML from "../../HTML/HTML";

import SettingsHome from "../Home/SettingsHome";
import SettingsTilebar from "../settings-titlebar/SettingsTilebar";

export default function SettingsNavbar() {
  const styles = "relative flex h-9 w-full bg-slate-900 justify-between";
  const container = HTML("div", styles, "settingsNavBar");

  const styles2 = "flex";
  const tabsWrapper = HTML("div", styles2, "settings-box--tabs-wrapper");

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
