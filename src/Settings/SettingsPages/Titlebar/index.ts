import HTML from "../../../components/HTML/HTML";
import EnableDisableField from "./EnableDisableField";
import ChangeBirthday from "./ChangeBirthday";

export default function Titlebar() {
  const styles =
    "w-[calc(100%-15rem)] h-full pt-6 px-4 pb-4 flex flex-col select-none overflow-y-auto";
  const mainContainer = HTML("section", styles, "settings--titlebar");
  const h1 = HTML(
    "h1",
    "text-center text-neutral-50 font-bold",
    "",
    "Titlebar"
  );

  mainContainer.append(h1, ChangeBirthday(), EnableDisableField());
  return mainContainer;
}
