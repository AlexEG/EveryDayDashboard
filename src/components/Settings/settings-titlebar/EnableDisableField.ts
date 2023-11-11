import SettingsFieldset from "../utils/SettingsFieldset";
import ToggleBtn from "./ToggleBtn";
import TitleBarDATA from "./TitleBarDATA";

export default function EnableDisableField() {
  const container = SettingsFieldset(
    "Enable/Disable Features",
    "settings--titlebar--enable-disable-features"
  );

  TitleBarDATA().then((data) => {
    container.append(
      ToggleBtn("Clock", "titlebar-clock-on-off", !!data["clock"], () =>
        window.DATA.editSettingsJSONFile_ON_OFF("settings/titlebar", "clock")
      ),
      ToggleBtn(
        "Age in Days",
        "titlebar-how-old-you-in-days-on-off",
        !!data["howOldYouInDays"],
        () =>
          window.DATA.editSettingsJSONFile_ON_OFF(
            "settings/titlebar",
            "howOldYouInDays"
          )
      )
    );
  });

  return container;
}
