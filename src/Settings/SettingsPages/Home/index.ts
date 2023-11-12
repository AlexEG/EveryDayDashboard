import HTML from "../../../components/HTML/HTML";
import EditHabitsContainer from "./EditHabits/EditHabitsContainer";

export default function Home() {
  const styles =
    "w-[calc(100%-15rem)] h-full pt-6 px-4 pb-4 flex flex-col select-none overflow-y-auto";
  const mainContainer = HTML("section", styles, "settings--home");
  const h1 = HTML("h1", "text-center text-neutral-50 font-bold", "", "Home");

  mainContainer.append(h1, EditHabitsContainer());
  return mainContainer;
}
