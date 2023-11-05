import "./index.css";
import TitleBar from "./components/TitleBar/TitleBar";
import Sidebar from "./components/Sidebar/Sidebar";
import SettingsBox from "./components/Settings/SettingsBox";
import Home from "./Dashboards/Home/Home";
// import YouTube from "./Dashboards/YouTube/YouTube";
const ROOT = document.querySelector("div#root");

ROOT.append(TitleBar());
ROOT.append(Sidebar());
ROOT.append(SettingsBox());

ROOT.append(Home());
// ROOT.append(YouTube());
