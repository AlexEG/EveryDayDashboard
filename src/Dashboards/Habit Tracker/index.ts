import HTML from "../../components/HTML/HTML";
import Tracker from "./Tracker";

export default function HabitTracker() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 p-4 overflow-y-auto";

  const MainContainer = HTML("main", styles, "habit-tracker");

  MainContainer.append(Tracker());
  return MainContainer;
}
