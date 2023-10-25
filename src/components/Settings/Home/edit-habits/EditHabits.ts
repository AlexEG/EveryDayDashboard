import HTML from "../../../HTML/HTML";
import SettingsFieldset from "../../utils/SettingsFieldset";
import habitComponent from "./habitComponent";

import AllHabitsDATA from "../../../Home/habits-table/AllHabitsDATA";

import allClickEvents from "./helpers/allClickEvents";

export default function EditHabits() {
  const mainContainer = SettingsFieldset(
    "Edit Habits",
    "settings--home--edit-habits"
  );

  const container = HTML("div", "flex flex-col w-full gap-y-4");

  // Insert Data
  AllHabitsDATA().then((data) => {
    const habitsNames = Object.keys(data);
    const numberOfHabits = habitsNames.length;

    // console.log(habitsNames);
    // console.log(data);
    // name => "habit_1_Wake_up_12_AM"

    habitsNames.forEach((name, i) => {
      container.append(habitComponent(name, i, numberOfHabits));
    });
  });

  mainContainer.append(container);
  // allClickEvents();
  return mainContainer;
}

// TODO remake all that but use the habit JSONfile number for order/select options
// TODO replace the data-habit-name data-habit-number => data-habit-file-name [habit_5_Habit_Name]
