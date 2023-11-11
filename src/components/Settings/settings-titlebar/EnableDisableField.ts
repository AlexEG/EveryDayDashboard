// import HTML from "../../HTML/HTML";
import SettingsFieldset from "../utils/SettingsFieldset";
import ToggleBtn from "./ToggleBtn";

export default function EnableDisableField() {
  const container = SettingsFieldset(
    "Enable/Disable Features",
    "settings--titlebar--enable-disable-features"
  );

  function settings(key: string) {
    window.DATA.editSettingsJSONFile_ON_OFF("settings/titlebar", key);
  }

  const TitleBarDATA = new Promise((res, rej) => {
    res(JSON.parse(window.DATA.getJSONFileData("settings/titlebar")));
  });

  TitleBarDATA.then((data) => {
    console.log(data);
    container.append(
      ToggleBtn("Clock", "titlebar-clock-on-off", !!data["clock"], () =>
        settings("clock")
      ),
      ToggleBtn(
        "Age in Days",
        "titlebar-how-old-you-in-days-on-off",
        !!data["howOldYouInDays"],
        () => settings("howOldYouInDays")
      )
    );
  });

  return container;
}
