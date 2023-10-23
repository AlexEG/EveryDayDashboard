import HTML from "../../../HTML/HTML";
import SettingsFieldset from "../../utils/SettingsFieldset";
import EditHabit from "./EditHabit";

export default function EditHabitsList() {
  const mainContainer = SettingsFieldset(
    "Edit Habits",
    "settings--home--edit-habits"
  );

  const container = HTML("div", "flex flex-col w-full gap-y-4");
  container.append(
    EditHabit(),
    EditHabit(),
    EditHabit(),
    EditHabit(),
    EditHabit(),
    EditHabit(),
    EditHabit(),
    EditHabit(),
    EditHabit(),
    EditHabit(),
    EditHabit(),
    EditHabit(),
    EditHabit()
  );

  mainContainer.append(container);
  return mainContainer;
}
