import HTML from "../../components/HTML/HTML";
import HabitsTable from "./habits-table/HabitsTable";
import InputField from "./add-new-habit/InputField";

export default function Home() {
  const styles =
    "home-section h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 p-4";

  const homeContainer = HTML("main", styles);

  homeContainer.append(HabitsTable(), InputField());
  return homeContainer;
}
