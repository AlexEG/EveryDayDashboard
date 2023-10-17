// import HTML from "../../HTML/HTML";
import SettingsFieldset from "../utils/SettingsFieldset";
import ToggleBtn from "./helpers/ToggleBtn";
import toggleBtnClickEvent from "./helpers/toggleBtnClickEvent";
export default function EnableDisableField() {
  const container = SettingsFieldset(
    "Enable/Disable Features",
    "settings--titlebar--enable-disable-features"
  );

  container.append(
    ToggleBtn("Calendar Title", "titlebar-calendar-title-on-off")
  );
  container.append(ToggleBtn("Clock", "titlebar-clock-on-off"));
  container.append(
    ToggleBtn("Age in Days", "titlebar-how-old-you-in-days-on-off")
  );

  toggleBtnClickEvent();
  return container;
}
