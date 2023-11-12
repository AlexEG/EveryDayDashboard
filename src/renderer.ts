import "./index.css";
import TitleBar from "./components/TitleBar/TitleBar";
import Sidebar from "./components/Sidebar/Sidebar";
import SettingsBox from "./components/Settings/SettingsBox";
// import Home from "./Dashboards/Home/Home";
import MonkeyType from "./Dashboards/MonkeyType/MonkeyType";
import Settings from "./Settings";

const ROOT = document.querySelector("div#root");
ROOT.append(TitleBar());
ROOT.append(Sidebar());
ROOT.append(SettingsBox());
ROOT.append(Settings());

// ROOT.append(Home());
ROOT.append(MonkeyType());
