import HTML from "../../HTML/HTML";
import EditHabitsList from "./edit-habits-list/EditHabitsList";
export default function SettingsHome() {
  const styles =
    "h-[calc(100%-2.25rem)] flex flex-col select-none overflow-y-auto";
  const mainContainer = HTML("section", styles, "settings-box--titlebar");

  mainContainer.append(EditHabitsList());
  return mainContainer;
}
