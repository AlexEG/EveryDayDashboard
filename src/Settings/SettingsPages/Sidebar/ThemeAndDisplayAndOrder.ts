import SettingsFieldset from "../../../components/Settings/SettingsFieldset";
import ThemeAndDisplayAndOrderComponent from "./ThemeAndDisplayAndOrderComponent";
import SidebarrDATA from "./SidebarDATA";
import HTML from "../../../components/HTML/HTML";

export default function ThemeAndDisplayAndOrder() {
  const container = SettingsFieldset(
    "Theme & Display & Order",
    "settings--sidebar--theme-display-order"
  );

  // ------------------
  SidebarrDATA().then((data) => {
    const DashboardsData = data["ThemeAndDisplayAndOrder"];

    for (let i = 0; i < DashboardsData.length; i++) {
      const [svgName, dashboardName, isDisplayed, colors] = DashboardsData[i];

      container.append(
        ThemeAndDisplayAndOrderComponent(
          svgName,
          dashboardName,
          DashboardsData.length,
          i,
          isDisplayed,
          colors
        )
      );
    }
  });
  // ------------------

  return container;
}
