import SettingsFieldset from "../../../components/Settings/SettingsFieldset";
import ThemeAndDisplayAndOrderComponent from "./ThemeAndDisplayAndOrderComponent";
import SidebarrDATA from "./SidebarDATA";

export default function ThemeAndDisplayAndOrder() {
  const container = SettingsFieldset(
    "Theme & Display & Order",
    "settings--sidebar--theme-display-order"
  );

  SidebarrDATA().then((data) => {
    const svgName_dashboardName = data["ThemeAndDisplayAndOrder"];

    for (let i = 0; i < svgName_dashboardName.length; i++) {
      const [svgName, dashboardName, isDisplayed, colors] =
        svgName_dashboardName[i];

      container.append(
        ThemeAndDisplayAndOrderComponent(
          svgName,
          dashboardName,
          svgName_dashboardName.length,
          i,
          isDisplayed,
          colors
        )
      );
    }
  });
  return container;
}
