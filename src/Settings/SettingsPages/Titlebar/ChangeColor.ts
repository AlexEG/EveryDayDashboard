// import HTML from "../../../components/HTML/HTML";
import SettingsFieldset from "../../../components/Settings/SettingsFieldset";
import TitleBarDATA from "./TitleBarDATA";

import ColorInput from "../../../components/Settings/inputs/ColorInput";

export default function ChangeColor() {
  const container = SettingsFieldset(
    "Change Color",
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

    console.log(backgroundColor);
    console.log(clockTimeColor);
    console.log(clock_AM_PMColor);
    console.log(ageInDaysColor);

    container.append(
      ColorInput(
        "settings--titlebar--change-color--background",
        "Background Color",
        backgroundColor,
        background
      ),
      ColorInput(
        "settings--titlebar--change-color--clock",
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
      )
    );
  });
  return container;
}
