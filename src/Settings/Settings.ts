import HTML from "../components/HTML/HTML";
import CloseSettingBtn from "./CloseSettingBtn";
import NavSidebar from "./NavSidebar/NavSidebar";
import AniList from "./SettingsPages/AniList/AniList";
// import Titlebar from "./SettingsPages/Titlebar";
import Sidebar from "./SettingsPages/Sidebar";
// import HabitTracker from "./SettingsPages/HabitTracker";

export default function Settings() {
  const styles =
    "bg-neutral-900 fixed top-[72px] left-[97px] bottom-10 right-10 z-[999] flex invisible";
  // invisible
  const settingsContainer = HTML("section", styles, "settings");
  settingsContainer.dataset.isSettingsOpen = "false";
  const className = "bg-pink-50 flex text-white";
  const isOpendByDefault_TabName = "AinList" as string;
  let Section: HTMLElement;

  if (isOpendByDefault_TabName === "AinList") Section = AniList();
  if (isOpendByDefault_TabName === "Sidebar") Section = Sidebar();

  settingsContainer.append(
    CloseSettingBtn(),
    NavSidebar(isOpendByDefault_TabName),
    Section,
  );
  return settingsContainer;
}
