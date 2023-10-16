import SettingsNavTab from "./SettingsNavTab";
import CloseSettingBtn from "./CloseSettingBtn";
import HTML from "../../HTML/HTML";

export default function SettingsNavbar() {
  const container = HTML(
    "div",
    "relative flex h-9 w-full bg-slate-900 flex justify-between",
    "settingsNavBar"
  );
  const tabsWrapper = HTML("div", "flex", "settings-box--tabs-wrapper");
  tabsWrapper.append(
    SettingsNavTab("Home"),
    SettingsNavTab("TitleBar"),
    SettingsNavTab("Sidebar"),
    SettingsNavTab("Calendar"),
    SettingsNavTab("Backup/Restore")
  );

  container.append(tabsWrapper, CloseSettingBtn());
  return container;
}