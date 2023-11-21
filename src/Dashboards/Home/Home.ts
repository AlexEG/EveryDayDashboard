import HTML from "../../components/HTML/HTML";
import HabitsTable from "./habits-table/HabitsTable";
import InputField from "./HabitSideList/InputField";

import Header from "./Header/Header";
import HabitSideList from "./HabitSideList/HabitSideList";

export default function Home() {
  const styles =
    "home-section h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400";

  const homeContainer = HTML("main", styles, "home");

  const wrapper = HTML("div", "flex gap-x-2 p-2");
  wrapper.append(HabitSideList(), HabitsTable());

  homeContainer.append(Header(), wrapper, InputField());
  return homeContainer;
}
