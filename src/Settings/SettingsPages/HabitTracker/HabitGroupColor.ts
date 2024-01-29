import SettingsFieldset from "../../../components/Settings/SettingsFieldset";
import ColorInput from "../../../components/Settings/inputs/ColorInput";

export default function HabitGroupColor(
  fileNameArr: string[],
  habitNameArr: string[],
  habitGroupColorArr: string[],
) {
  const container = SettingsFieldset(
    "Tracker / Habit Group Color",
    "settings--habit-tracker--habit-group-color",
  );

  function changeColor(colorPicker: HTMLInputElement) {
    const habitName = colorPicker.getAttribute("id").split(",")[1];
    console.log(`dashboards/habit-tracker/${habitName}`);
    window.DATA.editSettingsJSONFile_Value(
      `dashboards/habit-tracker/${habitName}`,
      "data",
      colorPicker.value,
      "metadata",
      "groupColor",
    );

    console.log(
      `%c Settings HabitTracker <Change> Habit Group Color => %c  %c\n${colorPicker.value}`,
      "background:black; color:white",
      `background:${colorPicker.value};`,
      "",
    );
  }

  for (let i = 0; i < habitNameArr.length; i++) {
    const colorPicker = ColorInput(
      `settings--habit-tracker--habit-group-color,${fileNameArr[i]}`,
      habitNameArr[i],
      habitGroupColorArr[i] || "#ffffff",
      changeColor,
    );
    colorPicker.style.width = "100%";
    container.append(colorPicker);
  }

  return container;
}
