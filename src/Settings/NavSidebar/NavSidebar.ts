import HTML from "../../components/HTML/HTML";
import NavBtn from "./NavBtn";
import BlockTitle from "./BlockTitle";

import Sidebar from "../SettingsPages/Sidebar";
import Titlebar from "../SettingsPages/Titlebar";
import HabitTracker from "../SettingsPages/HabitTracker";
import CodeWars from "../SettingsPages/CodeWars";
import CSSBattle from "../SettingsPages/CSSBattle";
import DEV from "../SettingsPages/DEV";
import Firebase from "../SettingsPages/Firebase";
import AniList from "../SettingsPages/AniList/AniList";
import GitHub from "../SettingsPages/GitHub";
export default function NavSidebar(isOpendByDefault_TabName: string) {
  const styles =
    "bg-neutral-800 h-full w-60 border-r border-r-neutral-700 p-4 select-none";
  const nav = HTML("nav", styles);

  nav.append(
    BlockTitle("General"),
    NavBtn(
      "Sidebar",
      Sidebar(),
      Boolean("Sidebar" === isOpendByDefault_TabName),
    ),
    NavBtn(
      "Titlebar",
      Titlebar(),
      Boolean("Titlebar" === isOpendByDefault_TabName),
    ),
    // NavBtn("Backup/Restore"),
    BlockTitle("Dashboards"),
    NavBtn(
      "Habit Tracker",
      HabitTracker(),
      Boolean("Habit Tracker" === isOpendByDefault_TabName),
    ),
    NavBtn("GitHub", GitHub(), Boolean("GitHub" === isOpendByDefault_TabName)),
    NavBtn(
      "CodeWars",
      CodeWars(),
      Boolean("CodeWars" === isOpendByDefault_TabName),
    ),
    NavBtn(
      "CSS Battle",
      CSSBattle(),
      Boolean("CSS Battle" === isOpendByDefault_TabName),
    ),
    NavBtn(
      "AinList",
      AniList(),
      Boolean("AinList" === isOpendByDefault_TabName),
    ),
    NavBtn("DEV", DEV(), Boolean("DEV" === isOpendByDefault_TabName)),
    NavBtn(
      "Firebase",
      Firebase(),
      Boolean("Firebase" === isOpendByDefault_TabName),
    ),
  );
  return nav;
}
