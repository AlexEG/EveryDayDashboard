import HTML from "../../../HTML/HTML";
import SettingsFieldset from "../../utils/SettingsFieldset";
import EditHabit from "./EditHabit";
import AllHabitsDATA from "../../../Home/habits-table/AllHabitsDATA";

import allClickEvents from "./btns/helpers/allClickEvents";

export default function EditHabitsList() {
  const mainContainer = SettingsFieldset(
    "Edit Habits",
    "settings--home--edit-habits"
  );

  const container = HTML("div", "flex flex-col w-full gap-y-4");

  // Insert Data
  AllHabitsDATA().then((data) => {
    const habitsNames = Object.keys(data);
    const numberOfHabits = habitsNames.length;

    habitsNames.forEach((name, i) => {
      container.append(EditHabit(name, i, numberOfHabits));
    });
  });

  mainContainer.append(container);
  allClickEvents();
  return mainContainer;
}
