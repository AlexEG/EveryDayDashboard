import HTML from "../HTML/HTML";
import HabitsTable from "./habits-table/HabitsTable";
export default function Home() {
  const styles =
    "home-section h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border";

  const homeContainer = HTML("main", styles);
  const tableContainer = HTML("section", "overflow-x-auto flex justify-center");

  tableContainer.append(HabitsTable());
  homeContainer.append(tableContainer);

  return homeContainer;
}
