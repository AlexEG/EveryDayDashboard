import HTML from "../../components/HTML/HTML";
import HabitsTable from "./habits-table/HabitsTable";
import InputField from "./HabitSideList/InputField";

import Header from "./Header";
import HabitSideList from "./HabitSideList/HabitSideList";
import TimeChart from "./TimeChart";

export default function Home() {
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
  return homeContainer;
}
