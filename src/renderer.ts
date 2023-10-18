import "./index.css";
import TitleBar from "./components/TitleBar/TitleBar";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Calendar from "./components/Calendar/Calendar";
import TitleBarClock from "./components/TitleBar/TitleBarClock";
import CalendarMonthContainer from "./components/Calendar/CalendarMonthContainer";
import CalendarMonth from "./components/Calendar/CalendarMonth";
import AdditionalOptionsMenu from "./components/AdditionalOptionsMenu/AdditionalOptionsMenu";
// import AddNewHabitFunc from "./components/Sidebar/AddNewHabitFunc";
import addRemoveActiveDay from "./components/Calendar/addRemoveActiveDay";
import HabitBtnFunc from "./components/Sidebar/HabitBtnFunc";
import SettingsBox from "./components/Settings/SettingsBox";
import Home from "./components/Home/Home";
const ROOT = document.querySelector("div#root");

ROOT.append(TitleBar());
ROOT.innerHTML += Sidebar();
// ROOT.innerHTML += Header();
// ROOT.innerHTML += Calendar();
ROOT.append(SettingsBox()); ///
ROOT.append(Home()); ///

//**  RENDER CALENDER (One time only) **//
const monthNames = [
  ["January", 31],
  ["February", 28],
  ["March", 31],
  ["April", 30],
  ["May", 31],
  ["June", 30],
  ["July", 31],
  ["August", 31],
  ["September", 30],
  ["October", 31],
  ["November", 30],
  ["December", 31],
];
// monthNames.forEach((month) => {
//   document.querySelector("main").innerHTML += CalendarMonthContainer(
//     month[0].toString()
//   );
//   CalendarMonth(month[0].toString(), +month[1]);
// });
//** **//

// ROOT.innerHTML += AdditionalOptionsMenu();

//? FUNCTIONS ?//

TitleBarClock();
setInterval(TitleBarClock, 60000);

// AddNewHabitFunc();
// addRemoveActiveDay();
// HabitBtnFunc();

document.querySelector("#settings-open-btn").addEventListener("click", () => {
  document.querySelector("div#settings-box").classList.remove("hidden");
});
document.querySelector("#settings-close-btn").addEventListener("click", () => {
  document.querySelector("div#settings-box").classList.add("hidden");
});

// document.querySelector("main").addEventListener("click", () => {
// console.log(versions.chrome());
// });

// document.querySelector("main").addEventListener("click", () => {
//   console.log(jsonFiles.createFolder("Testing"));
// });
