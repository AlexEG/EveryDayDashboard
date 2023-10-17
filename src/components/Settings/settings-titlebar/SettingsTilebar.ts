import HTML from "../..//HTML/HTML";
import ChangeBirthday from "./ChangeBirthday";

export default function SettingsTilebar() {
  const styles = "h-[calc(100%-2.25rem)]";
  const mainContainer = HTML("section", styles, "settings-box--titlebar");
  mainContainer.append(ChangeBirthday());
  return mainContainer;
}
