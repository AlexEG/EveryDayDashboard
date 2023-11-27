import "./index.css";
import TitleBar from "./components/TitleBar/TitleBar";
import Sidebar from "./components/Sidebar/Sidebar";
import Settings from "./Settings";
import Home from "./Dashboards/Home/Home";
// import CodeWars from "./Dashboards/CodeWars";

const ROOT = document.querySelector("div#root");
ROOT.append(TitleBar());
ROOT.append(Sidebar());
ROOT.append(Settings());

ROOT.append(Home());
// ROOT.append(CodeWars());
