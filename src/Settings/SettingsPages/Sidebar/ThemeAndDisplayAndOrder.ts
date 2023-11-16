import HTML from "../../../components/HTML/HTML";
import ThemeAndDisplayAndOrderComponent from "./ThemeAndDisplayAndOrderComponent";

import SettingsFieldset from "../../../components/Settings/SettingsFieldset";

export default function ThemeAndDisplayAndOrder() {
  const container = SettingsFieldset(
    "Theme & Display & Order",
    "settings--sidebar--theme-display-order"
  );

  container.append(
    ThemeAndDisplayAndOrderComponent(),
    ThemeAndDisplayAndOrderComponent()
  );
  return container;
}
