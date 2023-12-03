import HTML from "../../components/HTML/HTML";

export default function HabitTracker() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 p-4";

  const MainContainer = HTML("main", styles, "habit-tracker");

  const h1 = HTML(
    "h1",
    "text-center text-neutral-50 font-bold",
    "",
    "Habit Tracker"
  );

  MainContainer.append(h1);
  return MainContainer;
}
