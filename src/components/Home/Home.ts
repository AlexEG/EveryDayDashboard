import HTML from "../HTML/HTML";
import HabitsTable from "./habits-table/HabitsTable";

export default function Home() {
  const styles =
    "home-section h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border p-4";

  const homeContainer = HTML("main", styles);

  homeContainer.append(HabitsTable());
  return homeContainer;
}
