import SettingsFieldset from "../../../components/Settings/SettingsFieldset";
import ColorInput from "../../../components/Settings/inputs/ColorInput";
import SidebarDATA from "./SidebarDATA";
import ResetAllBtn from "../../../components/Settings/buttons/ResetAllBtn";
import HTML from "../../../components/HTML/HTML";

export default function ChangeColor() {
  const container = SettingsFieldset(
    "Change Color",
    "settings--sidebar--change-color"
  );

  function background(colorPicker: HTMLInputElement) {
    const sidebar = document.querySelector("aside#sidebar") as HTMLElement;
    sidebar.style.backgroundColor = colorPicker.value;

    window.DATA.editSettingsJSONFile_Value(
      "settings/sidebar",
      "theme",
      colorPicker.value,
      "backgroundColor"
    );

    console.log(
      `%c Change Sidebar background Color => %c  %c\n${colorPicker.value}`,
      "background:black; color:white",
      `background:${colorPicker.value};`,
      ""
    );
  }

  SidebarDATA().then((data: any) => {
    // console.log(data["theme"]);
    const { backgroundColor } = data["theme"];

    container.append(
      ColorInput(
        "settings--sidebar--change-color--background",
        "Background Color",
        backgroundColor,
        background
      ),

      resetBtnContainer
    );
  });

  const resetBtn = ResetAllBtn();
  const resetBtnContainer = HTML("div", "w-full pt-4 flex justify-end");
  resetBtnContainer.append(resetBtn);

  resetBtn.onclick = () => {
    // Reset JSON
    const defaultTheme = {
      backgroundColor: "",
    };

    window.DATA.editSettingsJSONFile_Value(
      "settings/titlebar",
      "theme",
      defaultTheme
    );

    // Reset UI (in real time)
    document.querySelector("div#titlebar").style.backgroundColor = "";

    // Reset color picker (in real time)
    document.querySelector(
      "#settings--sidebar--change-color--background"
    ).value = "#020617";
  };

  return container;
}
