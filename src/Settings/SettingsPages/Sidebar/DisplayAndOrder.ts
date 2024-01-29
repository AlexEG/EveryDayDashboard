import SettingsFieldset from "../../../components/Settings/SettingsFieldset";
import DisplayAndOrderComponent from "./DisplayAndOrderComponent";
import SidebarrDATA from "./SidebarDATA";
// import HTML from "../../../components/HTML/HTML";

export default function DisplayAndOrder() {
  const container = SettingsFieldset(
    "Display & Order",
    "settings--sidebar--display-order",
  );

  // ------------------
  SidebarrDATA().then((data) => {
    const DashboardsData = data["DisplayAndOrder"];

    for (let i = 0; i < DashboardsData.length; i++) {
      const [svgName, dashboardName, isDisplayed] = DashboardsData[i];

      container.append(
        DisplayAndOrderComponent(
          svgName,
          dashboardName,
          DashboardsData.length,
          i,
          isDisplayed,
        ),
      );
    }
  });
  // ------------------

  return container;
}
