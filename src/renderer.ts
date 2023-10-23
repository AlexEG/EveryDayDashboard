import "./index.css";
import TitleBar from "./components/TitleBar/TitleBar";
import Sidebar from "./components/Sidebar/Sidebar";
import TitleBarClock from "./components/TitleBar/TitleBarClock";
import SettingsBox from "./components/Settings/SettingsBox";
import Home from "./components/Home/Home";
const ROOT = document.querySelector("div#root");

ROOT.append(TitleBar());
ROOT.append(Sidebar());
ROOT.append(SettingsBox());
ROOT.append(Home());

//? FUNCTIONS ?//

TitleBarClock();
// setInterval(TitleBarClock, 60000);

document.querySelector("#settings-open-btn").addEventListener("click", () => {
  document.querySelector("div#settings-box").classList.remove("hidden");
});
document.querySelector("#settings-close-btn").addEventListener("click", () => {
  document.querySelector("div#settings-box").classList.add("hidden");
});
