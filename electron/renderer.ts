// const PREF_LOG_START = Date.now();
import "../src/index.css";
import TitleBar from "../src/components/TitleBar/TitleBar";
import Sidebar from "../src/components/Sidebar/Sidebar";
import Settings from "../src/Settings/Settings";
// import CodeWars from "../src/Dashboards/CodeWars";
// import HabitTracker from "../src/Dashboards/HabitTracker";
// import MonkeyType from "../src/Dashboards/MonkeyType/MonkeyType";
import AniList from "../src/Dashboards/AniList/AniList";
// import Achievements from "../src/Dashboards/Achievements/Achievements";

const ROOT = document.querySelector("div#root");

if (ROOT) {
  ROOT.append(TitleBar());
  ROOT.append(Sidebar());
  ROOT.append(Settings());
  // ROOT.append(MonkeyType());
  // ROOT.append(HabitTracker());
  ROOT.append(AniList());
  // ROOT.append(Achievements());
}

// {
//   const PREF_LOG_END = Date.now();
//   const PREF_LOG_CSS = [
//     "background:#000; color:#fff",
//     "background:#000; color:#0f0",
//     "background:#000; color:#fff",
//   ];
//   console.log(
//     `%c Preformance / renderer.ts  {%c ${PREF_LOG_END - PREF_LOG_START}ms %c} `,
//     ...PREF_LOG_CSS,
//   );
// }
