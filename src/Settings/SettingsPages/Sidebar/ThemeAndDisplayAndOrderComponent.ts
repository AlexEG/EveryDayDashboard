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
  const styles =
    "relative bg-neutral-500/0 p-5 w-full mb-2 flex justify-between";
  const container = HTML("div", styles);

  const rightWrapper = HTML("div", "flex");
  const LeftWrapper = HTML("div", "flex");

  rightWrapper.append(Logo(svgName), LogoTilte(dashboardName));
  LeftWrapper.append(
    SelectNumBtn(maxOptionNum, SelectedOption),
    ToggleBtn("", "", isDisplayed, () => console.log("ON/OFF"))
  );

  container.append(
    rightWrapper,
    MultiInputColor(dashboardName, colors),
    LeftWrapper,
    Hr()
  );
  return container;
}
