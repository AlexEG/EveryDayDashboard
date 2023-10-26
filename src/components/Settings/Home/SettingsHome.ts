import HTML from "../../HTML/HTML";
import EditHabitsContainer from "./edit-habits/EditHabitsContainer";

export default function SettingsHome() {
  const styles =
    "h-[calc(100%-2.25rem)] flex flex-col select-none overflow-y-auto";
  const mainContainer = HTML("section", styles, "settings-box--home");

  mainContainer.append(EditHabitsContainer());
  return mainContainer;
}
