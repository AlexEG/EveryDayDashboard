import HTML from "../../components/HTML/HTML";
import NavBtn from "./NavBtn";
import BlockTitle from "./BlockTitle";

import Sidebar from "../SettingsPages/Sidebar";
import Titlebar from "../SettingsPages/Titlebar";
import Home from "../SettingsPages/Home";
import CodeWars from "../SettingsPages/CodeWars";
import CSSBattle from "../SettingsPages/CSSBattle";
import DEV from "../SettingsPages/DEV";
import Firebase from "../SettingsPages/Firebase";
import AniList from "../SettingsPages/AniList";
import GitHub from "../SettingsPages/GitHub";
export default function NavSidebar() {
  const styles = "bg-neutral-800 h-full w-60 border-r border-r-neutral-700 p-4";
  const nav = HTML("nav", styles);

  nav.append(
    BlockTitle("General"),
    NavBtn("Sidebar", Sidebar),
    NavBtn("Titlebar", Titlebar),
    // NavBtn("Backup/Restore"),
    // BlockTitle("Plugins"),
    // NavBtn("Plugins list"),
    BlockTitle("Dashboards"),
    NavBtn("Home", Home),
    NavBtn("GitHub", GitHub),
    // NavBtn("WakaTime"),
    NavBtn("CodeWars", CodeWars),
    // NavBtn("LeetCode"),
    // NavBtn("CSS Battle"),
    // NavBtn("TryHackMe"),
    // NavBtn("MonkeyType"),
    // NavBtn("YouTube"),
    // NavBtn("Spotify"),
    NavBtn("AinList", AniList)
    // NavBtn("Frontend Mentor"),
    // NavBtn("FreeCodeCamp"),
    // NavBtn("DEV"),
    // NavBtn("Firebase"),
    // NavBtn("Vercel")
  );
  nav.children[1].classList.add("bg-neutral-600");
  return nav;
}
