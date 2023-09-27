import "./index.css";
import TitleBar from "./components/TitleBar/TitleBar";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Calendar from "./components/Calendar/Calendar";
import TitleBarClock from "./components/TitleBar/TitleBarClock";
import HowOldAmI from "./components/TitleBar/HowOldAmI";
import CalendarMonthContainer from "./components/Calendar/CalendarMonthContainer";
import CalendarMonth from "./components/Calendar/CalendarMonth";
import AdditionalOptionsMenu from "./components/AdditionalOptionsMenu/AdditionalOptionsMenu";
import AddNewHabitFunc from "./components/Sidebar/AddNewHabitFunc";
import addRemoveActiveDay from "./components/Calendar/addRemoveActiveDay";

document.querySelector("div#root").innerHTML += TitleBar();
document.querySelector("div#root").innerHTML += Sidebar();
document.querySelector("div#root").innerHTML += Header();
document.querySelector("div#root").innerHTML += Calendar();

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
monthNames.forEach((month) => {
  document.querySelector("main").innerHTML += CalendarMonthContainer(
    month[0].toString()
  );
  CalendarMonth(month[0].toString(), +month[1]);
});
//** **//

document.querySelector("div#root").innerHTML += AdditionalOptionsMenu();

//? FUNCTIONS ?//

TitleBarClock();
setInterval(TitleBarClock, 60000);
HowOldAmI(2004, 4, 20);
AddNewHabitFunc();
addRemoveActiveDay();
