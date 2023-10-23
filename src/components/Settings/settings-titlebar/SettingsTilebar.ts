import HTML from "../../HTML/HTML";
import ChangeBirthday from "./ChangeBirthday";
import EnableDisableField from "./EnableDisableField";

export default function SettingsTilebar() {
  const styles = "h-[calc(100%-2.25rem)] flex flex-col select-none";
  const mainContainer = HTML("section", styles, "settings-box--titlebar");

  mainContainer.append(ChangeBirthday(), EnableDisableField());
  return mainContainer;
}
