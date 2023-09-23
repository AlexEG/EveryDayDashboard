import "./index.css";
import TitleBar from "./components/TitleBar/TitleBar";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Calendar from "./components/Calendar/Calendar";
import TitleBarClock from "./components/TitleBar/TitleBarClock";

document.querySelector("div#root").innerHTML += TitleBar();
document.querySelector("div#root").innerHTML += Sidebar();
document.querySelector("div#root").innerHTML += Header();
document.querySelector("div#root").innerHTML += Calendar();

setInterval(TitleBarClock, 60000);
