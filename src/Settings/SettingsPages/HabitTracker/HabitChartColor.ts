import SettingsFieldset from "../../../components/Settings/SettingsFieldset";
import ColorInput from "../../../components/Settings/inputs/ColorInput";

export default function HabitChartColor(
  fileNameArr: string[],
  habitNameArr: string[],
  habitChartColorArr: string[]
) {
  const container = SettingsFieldset(
    "Habit Chart Color",
    "settings--habit-tracker--habit-chart-color"
  );

  function changeColor(colorPicker: HTMLInputElement) {
    const habitName = colorPicker.getAttribute("id").split(",")[1];

    // console.log(`dashboards/habit-tracker/${habitName}`);
    window.DATA.editSettingsJSONFile_Value(
      `dashboards/habit-tracker/${habitName}`,
      "data",
      colorPicker.value,
      "metadata",
      "chartColor"
    );

    console.log(
      `%c Settings HabitTracker <Change> Habit Chart Color => %c  %c\n${colorPicker.value}`,
      "background:black; color:white",
      `background:${colorPicker.value};`,
      ""
    );
  }

  for (let i = 0; i < habitNameArr.length; i++) {
    const colorPicker = ColorInput(
      `settings--habit-tracker--habit-chart-color,${fileNameArr[i]}`,
      habitNameArr[i],
      habitChartColorArr[i] || "#ffffff",
      changeColor
    );
    colorPicker.style.width = "100%";
    container.append(colorPicker);
  }

  return container;
}
