import SettingsFieldset from "../../../components/Settings/SettingsFieldset";
import ColorInput from "../../../components/Settings/inputs/ColorInput";
import TitleBarDATA from "./TitleBarDATA";
import ResetAllBtn from "../../../components/Settings/buttons/ResetAllBtn";
import HTML from "../../../components/HTML/HTML";

export default function ChangeColor() {
  const container = SettingsFieldset(
    "Theme",
    "settings--titlebar--change-color"
  );

  function background(colorPicker: HTMLInputElement) {
    const titlebar = document.querySelector("div#titlebar") as HTMLDivElement;
    titlebar.style.backgroundColor = colorPicker.value;

    window.DATA.editSettingsJSONFile_Value(
      "settings/titlebar",
      "theme",
      colorPicker.value,
      "backgroundColor"
    );

    console.log(
      `%c Change Titlebar background Color => %c  %c\n${colorPicker.value}`,
      "background:black; color:white",
      `background:${colorPicker.value};`,
      ""
    );
  }

  function clockTime(colorPicker: HTMLInputElement) {
    const clock = document.querySelector(
      "div#titlebar #titlebar--clock time"
    ) as HTMLDivElement;

    if (clock) {
      clock.style.color = colorPicker.value;

      window.DATA.editSettingsJSONFile_Value(
        "settings/titlebar",
        "theme",
        colorPicker.value,
        "clockTimeColor"
      );

      console.log(
        `%c Change Titlebar Clock (Time) Color => %c  %c\n${colorPicker.value}`,
        "background:black; color:white",
        `background:${colorPicker.value};`,
        ""
      );
    }
  }
  function clock_AM_PM(colorPicker: HTMLInputElement) {
    const clock = document.querySelector(
      "div#titlebar #titlebar--clock span"
    ) as HTMLDivElement;

    if (clock) {
      clock.style.color = colorPicker.value;

      window.DATA.editSettingsJSONFile_Value(
        "settings/titlebar",
        "theme",
        colorPicker.value,
        "clock_AM_PMColor"
      );

      console.log(
        `%c Change Titlebar Clock (AM/PM) Color => %c  %c\n${colorPicker.value}`,
        "background:black; color:white",
        `background:${colorPicker.value};`,
        ""
      );
    }
  }

  function ageInDays(colorPicker: HTMLInputElement) {
    const ageInDays = document.querySelector(
      "div#titlebar #titlebar--age-in-days span"
    ) as HTMLDivElement;

    if (ageInDays) {
      ageInDays.style.color = colorPicker.value;

      window.DATA.editSettingsJSONFile_Value(
        "settings/titlebar",
        "theme",
        colorPicker.value,
        "ageInDaysColor"
      );

      console.log(
        `%c Change Titlebar AgeInDays Color => %c  %c\n${colorPicker.value}`,
        "background:black; color:white",
        `background:${colorPicker.value};`,
        ""
      );
    }
  }
  TitleBarDATA().then((data: any) => {
    // console.log(data["theme"]);
    const {
      backgroundColor,
      clockTimeColor,
      clock_AM_PMColor,
      ageInDaysColor,
    } = data["theme"];

    container.append(
      ColorInput(
        "settings--titlebar--change-color--background",
        "Background Color",
        backgroundColor,
        background
      ),
      ColorInput(
        "settings--titlebar--change-color--clock-time",
        "Clock Time",
        clockTimeColor,
        clockTime
      ),
      ColorInput(
        "settings--titlebar--change-color--clock-am-pm",
        "Clock AM/PM",
        clock_AM_PMColor,
        clock_AM_PM
      ),
      ColorInput(
        "settings--titlebar--change-color--age-in-days",
        "Age in Days Color",
        ageInDaysColor,
        ageInDays
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
      clockTimeColor: "",
      clock_AM_PMColor: "",
      ageInDaysColor: "",
    };

    window.DATA.editSettingsJSONFile_Value(
      "settings/titlebar",
      "theme",
      defaultTheme
    );

    // Reset UI (in real time)
    document.querySelector("div#titlebar").style.backgroundColor = "";
    document.querySelector("div#titlebar #titlebar--clock time").style.color =
      "";
    document.querySelector("div#titlebar #titlebar--clock span").style.color =
      "";
    document.querySelector(
      "div#titlebar #titlebar--age-in-days span"
    ).style.color = "";

    // Reset color picker (in real time)
    document.querySelector(
      "#settings--titlebar--change-color--background"
    ).value = "#020617";
    document.querySelector(
      "#settings--titlebar--change-color--clock-time"
    ).value = "#ffffff";
    document.querySelector(
      "#settings--titlebar--change-color--clock-am-pm"
    ).value = "#ffffff";
    document.querySelector(
      "#settings--titlebar--change-color--age-in-days"
    ).value = "#ffffff";
  };

  return container;
}
