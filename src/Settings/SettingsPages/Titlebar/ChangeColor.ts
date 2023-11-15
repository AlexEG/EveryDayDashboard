import HTML from "../../../components/HTML/HTML";
import SettingsFieldset from "../../../components/Settings/SettingsFieldset";

import ColorInput from "../../../components/Settings/inputs/ColorInput";

export default function ChangeColor() {
  const container = SettingsFieldset(
    "Change Color",
    "settings--titlebar--change-color"
  );

  function background(colorPicker: HTMLInputElement) {
    const titlebar = document.querySelector("div#titlebar") as HTMLDivElement;
    titlebar.style.backgroundColor = colorPicker.value;

    console.log(
      `%c Change Titlebar background Color => %c  `,
      "background:black; color:white",
      `background:${colorPicker.value};`
    );
  }

  function clockTime(colorPicker: HTMLInputElement) {
    const clock = document.querySelector(
      "div#titlebar #titlebar--clock time"
    ) as HTMLDivElement;

    if (clock) {
      clock.style.color = colorPicker.value;

      console.log(
        `%c Change Titlebar Clock (Time) Color => %c  `,
        "background:black; color:white",
        `background:${colorPicker.value};`
      );
    }
  }
  function clock_AM_PM(colorPicker: HTMLInputElement) {
    const clock = document.querySelector(
      "div#titlebar #titlebar--clock span"
    ) as HTMLDivElement;

    if (clock) {
      clock.style.color = colorPicker.value;

      console.log(
        `%c Change Titlebar Clock (AM/PM) Color => %c  `,
        "background:black; color:white",
        `background:${colorPicker.value};`
      );
    }
  }

  function ageInDays(colorPicker: HTMLInputElement) {
    const ageInDays = document.querySelector(
      "div#titlebar #titlebar--age-in-days span"
    ) as HTMLDivElement;

    if (ageInDays) {
      ageInDays.style.color = colorPicker.value;

      console.log(
        `%c Change Titlebar AgeInDays Color => %c  `,
        "background:black; color:white",
        `background:${colorPicker.value};`
      );
    }
  }

  container.append(
    ColorInput(
      "settings--titlebar--change-color--background",
      "Background Color",
      "#f000f0",
      background
    ),
    ColorInput(
      "settings--titlebar--change-color--clock",
      "Clock Time",
      "#f000f0",
      clockTime
    ),
    ColorInput(
      "settings--titlebar--change-color--clock-am-pm",
      "Clock AM/PM",
      "#f000f0",
      clock_AM_PM
    ),
    ColorInput(
      "settings--titlebar--change-color--age-in-days",
      "Age in Days Color",
      "#f000f0",
      ageInDays
    )
  );
  return container;
}
