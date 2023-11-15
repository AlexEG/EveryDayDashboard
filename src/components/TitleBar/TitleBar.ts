import HTML from "../HTML/HTML";
import TitleBarClock from "./TitleBarClock";
import HowOldAmI from "./HowOldAmI";
import Clock from "./Clock";

export default function TitleBar() {
  const contanier = HTML(
    "div",
    "h-[31px] bg-slate-950 select-none relative pl-14 flex items-center",
    "titlebar"
  );

  const clockDateWrapperR = HTML(
    "div",
    "absolute right-40 h-full flex items-center gap-3 text-white/50 font-medium drop-shadow-[0_0_10px_#000]"
  );

  // ------------
  const TitleBarDATA = new Promise((res, rej) => {
    res(JSON.parse(window.DATA.getJSONFileData("settings/titlebar")));
  });

  TitleBarDATA.then((data) => {
    if (!!data["clock"]) {
      clockDateWrapperR.append(Clock());
      TitleBarClock();
    }
    if (!!data["howOldYouInDays"])
      clockDateWrapperR.append(HowOldAmI(data["birthday"]));
  });
  // ------------

  contanier.append(clockDateWrapperR);
  return contanier;
}
