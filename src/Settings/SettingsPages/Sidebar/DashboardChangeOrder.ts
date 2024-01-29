import SelectNumBtn from "../../../components/Settings/buttons/SelectNumBtn";
import SidebarrDATA from "./SidebarDATA";

import SettingsFieldset from "../../../components/Settings/SettingsFieldset";
import DisplayAndOrderComponent from "./DisplayAndOrderComponent";

export default function DashboardChangeOrder(
  maxOptionNum: number,
  SelectedOption: number,
) {
  return SelectNumBtn(maxOptionNum, SelectedOption, (e: Event) => {
    const select = e.target as HTMLSelectElement;

    const Value1 = +select.getAttribute("value") - 1;
    const Value2 = +select.value - 1;

    SidebarrDATA().then((data) => {
      const arr1 = data["DisplayAndOrder"][Value1];
      const arr2 = data["DisplayAndOrder"][Value2];
      const DashboardsData = data["DisplayAndOrder"];

      const newAllData = Array.from(DashboardsData);
      newAllData[Value1] = arr2;
      newAllData[Value2] = arr1;

      window.DATA.editSettingsJSONFile_Value(
        "settings/sidebar",
        "DisplayAndOrder",
        newAllData,
      );

      console.log(
        `%c Sidebar Dashboard < ${arr1[1]} > Change Order => %c ${Value2 + 1} `,
        "background:black; color:white",
        `background:black; color:#0f0; font-weight: 900;`,
      );
      // --------------------------------
      //* Refresh  Display & Order *//
      document.querySelector("#settings--sidebar--display-order").remove();

      const container = SettingsFieldset(
        "Display & Order",
        "settings--sidebar--display-order",
      );

      for (let i = 0; i < DashboardsData.length; i++) {
        const [svgName, dashboardName, isDisplayed] = newAllData[i] as [
          string,
          string,
          boolean,
        ];

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
      document.querySelector("#settings--sidebar").append(container);

      // --------------------------------
    });
  });
}
