import ToggleBtn from "../../../components/Settings/buttons/ToggleBtn";

export default function DashboardONOFF(
  isDisplayed: boolean,
  SelectedOption: number,
  dashboardName: string,
) {
  return ToggleBtn("", "", isDisplayed, (checkbox: HTMLInputElement) => {
    window.DATA.editSettingsJSONFile_ON_OFF(
      "settings/sidebar",
      "DisplayAndOrder",
      SelectedOption,
      2,
    );

    console.log(
      `%c Sidebar Dashboard < ${dashboardName} >  %c ${
        checkbox.hasAttribute("checked") ? "ON" : "OFF"
      }  `,
      "background:black; color:white",
      `background:black; color:#${
        checkbox.hasAttribute("checked") ? "0f0" : "f00"
      }; font-weight: 900;`,
    );
  });
}
