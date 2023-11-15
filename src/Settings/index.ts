import HTML from "../components/HTML/HTML";
import CloseSettingBtn from "./CloseSettingBtn";
import NavSidebar from "./NavSidebar";
// import Sidebar from "./SettingsPages/Sidebar";
import Home from "./SettingsPages/Home";
export default function Settings() {
  const styles =
    "bg-neutral-900 fixed top-[72px] left-[97px] bottom-10 right-10 z-[999] flex invisible";
  // invisible
  const settingsContainer = HTML("section", styles, "settings");
  settingsContainer.dataset.isSettingsOpen = "false";

  settingsContainer.append(CloseSettingBtn(), NavSidebar(), Home());
  return settingsContainer;
}
