import HTML from "../../HTML/HTML";
import tabsClickEvent from "./helpers/tabsClickEvent";

export default function SettingsNavTab(tabTitle: string) {
  const tab = HTML(
    "button",
    "relative h-full cursor-pointer bg-slate-800 py-1 px-2 text-center text-white before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full select-none",
    "",
    tabTitle
  );
  tabsClickEvent();
  return tab;
}
