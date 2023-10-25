import HTML from "../../HTML/HTML";
import EditHabits from "./edit-habits/EditHabits";
export default function SettingsHome() {
  const styles =
    "h-[calc(100%-2.25rem)] flex flex-col select-none overflow-y-auto";
  const mainContainer = HTML("section", styles, "settings-box--titlebar");

  mainContainer.append(EditHabits());
  return mainContainer;
}
