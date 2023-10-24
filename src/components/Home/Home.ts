import HTML from "../HTML/HTML";
import HabitsTable from "./habits-table/HabitsTable";
import InputField from "./add-new-habit/InputField";
// ---
import closeInputBtn from "./add-new-habit/helpers/closeInputBtnEvent";
import openInputBtnEvent from "./add-new-habit/helpers/openInputBtnEvent";
import saveInputBtn from "./add-new-habit/helpers/saveInputBtn";
import checkboxEvent from "./habits-table/helpers/checkboxEvent";

export default function Home() {
  const styles =
    "home-section h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 p-4";

  const homeContainer = HTML("main", styles);

  homeContainer.append(HabitsTable(), InputField());
  // ---
  window.addEventListener("DOMContentLoaded", () => {
    saveInputBtn();
    openInputBtnEvent();
    closeInputBtn();
    checkboxEvent();
  });

  return homeContainer;
}
