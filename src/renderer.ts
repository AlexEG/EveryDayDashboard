const PREF_LOG_START = Date.now();
import "./index.css";
import TitleBar from "./components/TitleBar/TitleBar";
import Sidebar from "./components/Sidebar/Sidebar";
import Settings from "./Settings";
// import CodeWars from "./Dashboards/CodeWars";
// import HabitTracker from "./Dashboards/HabitTracker";
// import MonkeyType from "./Dashboards/MonkeyType/MonkeyType";
import AniList from "./Dashboards/AniList/AniList";
// import Achievements from "./Dashboards/Achievements/Achievements";

const ROOT = document.querySelector("div#root");

if (ROOT) {
  ROOT.append(TitleBar());
  ROOT.append(Sidebar());
  ROOT.append(Settings());
  // ROOT.append(MonkeyType());
  // ROOT.append(HabitTracker());
  ROOT.append(AniList());
}

{
  const PREF_LOG_END = Date.now();
  const PREF_LOG_CSS = [
    "background:#000; color:#fff",
    "background:#000; color:#0f0",
    "background:#000; color:#fff",
  ];
  console.log(
    `%c Preformance / renderer.ts  {%c ${PREF_LOG_END - PREF_LOG_START}ms %c} `,
    ...PREF_LOG_CSS
  );
}
