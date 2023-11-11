import HTML from "../HTML/HTML";
import TitleBarClock from "./TitleBarClock";
import HowOldAmI from "./HowOldAmI";

export default function TitleBar() {
  const contanier = HTML(
    "div",
    "h-[31px] bg-slate-950 select-none relative pl-14 flex items-center",
    "title-bar"
  );

  const CalendarTitleL = HTML(
    "span",
    "text-white/70 font-semibold drop-shadow-[0_0_10px_#000]",
    "title-bar-calendar-title"
  );
  CalendarTitleL.dataset.filePath = "";

  const clockDateWrapperR = HTML(
    "div",
    "absolute right-40 h-full flex items-center gap-3 text-white/50 font-medium drop-shadow-[0_0_10px_#000]"
  );
  const timeWrapper = HTML("div", "flex gap-1");
  const time = HTML(
    "time",
    "text-xs text-white/95",
    "title-bar-clock",
    "00:00"
  );
  time.setAttribute("datetime", "00:00");
  const timeDayNight = HTML("span", "text-xs", "title-bar-session", "AM");
  const dateWrapper = HTML("div", "text-sm");
  const day = HTML("span", "text-white/95", "title-bar-how-old-am-i", "0000");

  timeWrapper.append(time, timeDayNight);
  dateWrapper.append(day);
  clockDateWrapperR.append(timeWrapper, dateWrapper);
  contanier.append(CalendarTitleL, clockDateWrapperR);

  // ------------
  window.addEventListener("DOMContentLoaded", () => {
    TitleBarClock();
  });
  // ------------
  const TitleBarDATA = new Promise((res, rej) => {
    res(JSON.parse(window.DATA.getJSONFileData("settings/titlebar")));
  });

  TitleBarDATA.then((data) => {
    const birthday = data["birthday"];
    HowOldAmI(birthday[0], birthday[1], birthday[2]);
  });
  // ------------

  return contanier;
}
