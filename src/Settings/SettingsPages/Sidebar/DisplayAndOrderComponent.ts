import HTML from "../../../components/HTML/HTML";
import Hr from "../../../components/Settings/Hr";
import Logo from "../../../components/Settings/Logo";
import LogoTilte from "../../../components/Settings/LogoTilte";
import DashboardONOFF from "./DashboardONOFF";
import DashboardChangeOrder from "./DashboardChangeOrder";

export default function DisplayAndOrderComponent(
  svgName: string,
  dashboardName: string,
  maxOptionNum: number,
  SelectedOption: number,
  isDisplayed: boolean,
) {
  const styles = "relative p-5 w-full mb-2 flex justify-between";
  const container = HTML("div", styles);

  const rightWrapper = HTML("div", "flex");
  const LeftWrapper = HTML("div", "flex");

  rightWrapper.append(Logo(svgName), LogoTilte(dashboardName));

  LeftWrapper.append(
    DashboardChangeOrder(maxOptionNum, SelectedOption),
    DashboardONOFF(isDisplayed, SelectedOption, dashboardName),
  );

  container.append(rightWrapper, LeftWrapper, Hr());
  return container;
}
