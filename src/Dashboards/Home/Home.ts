import HTML from "../../components/HTML/HTML";
import HabitsTable from "./habits-table/HabitsTable";
import InputField from "./HabitSideList/InputField";

import Header from "./Header";
import HabitSideList from "./HabitSideList/HabitSideList";
import TimeChart from "./TimeChart";

export default function Home() {
  const PREF_LOG_START = Date.now();

  const styles =
    "home-section h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 overflow-y-auto";

  const homeContainer = HTML("main", styles, "home");

  const wrapper = HTML(
    "div",
    "flex gap-x-2 p-2",
    "home--habits-table-list-wrapper"
  );
  wrapper.append(HabitSideList(), HabitsTable());

  homeContainer.append(Header(), wrapper, TimeChart(), InputField());
  const PREF_LOG_END = Date.now();
  const PREF_LOG_CSS = [
    "background:#000; color:#fff",
    "background:#000; color:#0f0",
  ];
  console.log(
    `%c Preformance / Time  %c${PREF_LOG_END - PREF_LOG_START}ms`,
    ...PREF_LOG_CSS
  );
  return homeContainer;
}
