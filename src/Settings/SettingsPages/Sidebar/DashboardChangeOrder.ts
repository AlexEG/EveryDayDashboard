import SelectNumBtn from "../../../components/Settings/buttons/SelectNumBtn";
import SidebarrDATA from "./SidebarDATA";

import SettingsFieldset from "../../../components/Settings/SettingsFieldset";
import ThemeAndDisplayAndOrderComponent from "./ThemeAndDisplayAndOrderComponent";

export default function DashboardChangeOrder(
  maxOptionNum: number,
  SelectedOption: number
) {
  return SelectNumBtn(maxOptionNum, SelectedOption, (e: Event) => {
    const select = e.target as HTMLSelectElement;

    const Value1 = +select.getAttribute("value") - 1;
    const Value2 = +select.value - 1;

    SidebarrDATA().then((data) => {
      const arr1 = data["ThemeAndDisplayAndOrder"][Value1];
      const arr2 = data["ThemeAndDisplayAndOrder"][Value2];
      const DashboardsData = data["ThemeAndDisplayAndOrder"];

      const newAllData = Array.from(DashboardsData);
      newAllData[Value1] = arr2;
      newAllData[Value2] = arr1;

      window.DATA.editSettingsJSONFile_Value(
        "settings/sidebar",
        "ThemeAndDisplayAndOrder",
        newAllData
      );

      console.log(
        `%c Sidebar Dashboard < ${arr1[1]} > Change Order => %c ${Value2 + 1} `,
        "background:black; color:white",
        `background:black; color:#0f0; font-weight: 900;`
      );
      // --------------------------------
      //* Refresh Theme & Display & Order *//
      document
        .querySelector("#settings--sidebar--theme-display-order")
        .remove();

      const container = SettingsFieldset(
        "Theme & Display & Order",
        "settings--sidebar--theme-display-order"
      );

      for (let i = 0; i < DashboardsData.length; i++) {
        const [svgName, dashboardName, isDisplayed, colors] = newAllData[i] as [
          string,
          string,
          boolean,
          string[]
        ];

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
      document.querySelector("#settings--sidebar").append(container);

      // --------------------------------
    });
  });
}
