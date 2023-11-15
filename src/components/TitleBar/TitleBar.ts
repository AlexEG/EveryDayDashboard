import HTML from "../HTML/HTML";
import TitleBarClock from "./TitleBarClock";
import HowOldAmI from "./HowOldAmI";
import Clock from "./Clock";
import TitleBarDATA from "../../Settings/SettingsPages/Titlebar/TitleBarDATA";

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

  TitleBarDATA().then((data) => {
    if (!!data["clock"]) {
      clockDateWrapperR.append(
        Clock(
          data["theme"]["clockTimeColor"],
          data["theme"]["clock_AM_PMColor"]
        )
      );

      TitleBarClock();
    }

    if (!!data["howOldYouInDays"])
      clockDateWrapperR.append(
        HowOldAmI(data["birthday"], data["theme"]["ageInDaysColor"])
      );

    if (data["theme"]["backgroundColor"])
      contanier.style.backgroundColor = data["theme"]["backgroundColor"];
  });
  // ------------

  contanier.append(clockDateWrapperR);
  return contanier;
}
