import SettingsFieldset from "../../../components/Settings/SettingsFieldset";
import ColorInput from "../../../components/Settings/inputs/ColorInput";
import AllHabitsDATA from "../../../Dashboards/Home/habits-table/AllHabitsDATA";

export default function SettingsHomeTheme() {
  const container = SettingsFieldset("Theme", "settings--home--theme");

  function changeColor(colorPicker: HTMLInputElement) {
    window.DATA.editSettingsJSONFile_Value(
      "settings/home",
      "habitsColor",
      colorPicker.value,
      colorPicker.getAttribute("id").split(",")[1]
    );

    console.log(
      `%c Settings Home Change Habit Color => %c  %c\n${colorPicker.value}`,
      "background:black; color:white",
      `background:${colorPicker.value};`,
      ""
    );
  }

  const SettingsHomeDATA = new Promise((res, rej) => {
    res(JSON.parse(window.DATA.getJSONFileData("settings/home")));
  });

  AllHabitsDATA().then((data) => {
    // console.log(data);
    const habitsNames = Object.keys(data);
    SettingsHomeDATA.then((data: any) => {
      const habitsColor = data["habitsColor"];

      for (const key of habitsNames) {
        const habitTitle = key.split("_").slice(2).join(" ");

        const colorPicker = ColorInput(
          `settings--home--theme--habits-color,${habitTitle}`,
          habitTitle,
          habitsColor[habitTitle] || "#ffffff",
          changeColor
        );
        colorPicker.style.width = "100%";
        container.append(colorPicker);
      }
    });
  });
  return container;
}
