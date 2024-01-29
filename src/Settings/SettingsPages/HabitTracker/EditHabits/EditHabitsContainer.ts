import HTML from "../../../../components/HTML/HTML";
import SettingsFieldset from "../../../../components/Settings/SettingsFieldset";
import HabitComponent from "./HabitComponent";

export default function EditHabitsContainer(
  fileNameArr: string[],
  fileNumArr: number[],
) {
  const mainContainer = SettingsFieldset(
    "Edit Habits",
    "settings--habit-tracker--edit-habits",
  );
  const styles = "flex flex-col w-full gap-y-4";
  const container = HTML("div", styles);

  // Insert Data

  // console.log(habitsNames);
  // console.log(data);
  // name => "habit_1_Wake_up_12_AM"

  fileNameArr.forEach((name, idx, arr) => {
    container.append(HabitComponent(name, idx, arr.length, arr));
  });

  mainContainer.append(container);
  return mainContainer;
}
