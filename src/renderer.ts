import "./index.css";
import TitleBar from "./components/TitleBar/TitleBar";
import Sidebar from "./components/Sidebar/Sidebar";
import Settings from "./Settings";
// import CodeWars from "./Dashboards/CodeWars";
import HabitTracker from "./Dashboards/Habit Tracker";

const PREF_LOG_START = Date.now();

const ROOT = document.querySelector("div#root");

if (ROOT) {
  ROOT.append(TitleBar());
  ROOT.append(Sidebar());
  ROOT.append(Settings());
  ROOT.append(HabitTracker());
}
// ROOT.append(CodeWars());

{
  const PREF_LOG_END = Date.now();
  const PREF_LOG_CSS = [
    "background:#000; color:#fff",
    "background:#000; color:#0f0",
  ];
  console.log(
    `%c Preformance / Time  %c${PREF_LOG_END - PREF_LOG_START}ms `,
    ...PREF_LOG_CSS
  );
}
