import HTML from "../../../components/HTML/HTML";
import Hr from "../../../components/Settings/Hr";
import Logo from "../../../components/Settings/Logo";
import LogoTilte from "../../../components/Settings/LogoTilte";
import MultiInputColor from "../../../components/Settings/inputs/MultiInputColor";
import ToggleBtn from "../../../components/Settings/buttons/ToggleBtn";
import SelectNumBtn from "../../../components/Settings/buttons/SelectNumBtn";

export default function ThemeAndDisplayAndOrderComponent(
  svgName: string,
  dashboardName: string,
  maxOptionNum: number,
  SelectedOption: number,
  isDisplayed: boolean,
  colors: string[]
) {
  const styles = "relative p-5 w-full mb-2 flex justify-between";
  const container = HTML("div", styles);

  const rightWrapper = HTML("div", "flex");
  const LeftWrapper = HTML("div", "flex");

  rightWrapper.append(Logo(svgName), LogoTilte(dashboardName));

  LeftWrapper.append(
    SelectNumBtn(maxOptionNum, SelectedOption),
    ToggleBtn("", "", isDisplayed, (checkbox: HTMLInputElement) => {
      window.DATA.editSettingsJSONFile_ON_OFF(
        "settings/sidebar",
        "ThemeAndDisplayAndOrder",
        SelectedOption,
        2
      );

      console.log(
        `%c Sidebar Dashboard < ${dashboardName} >  %c ${
          checkbox.hasAttribute("checked") ? "ON" : "OFF"
        }  `,
        "background:black; color:white",
        `background:black; color:#${
          checkbox.hasAttribute("checked") ? "0f0" : "f00"
        }; font-weight: 900;`
      );
    })
  );

  container.append(
    rightWrapper,
    MultiInputColor(dashboardName, colors),
    LeftWrapper,
    Hr()
  );
  return container;
}
