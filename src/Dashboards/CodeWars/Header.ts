import HTML from "../../components/HTML/HTML";
import RefreshBtn from "./RefreshBtn";
import SelectMonthBtn from "../../components/Settings/buttons/SelectMonthBtn";
import HonorScoreChart from "./HonorScoreChart";

export default function Header() {
  const styles = "flex justify-end gap-x-4";
  const Header = HTML("div", styles);

  const img = HTML("img", "mr-auto", "", "", {
    src: "https://www.codewars.com/users/AlexEG/badges/micro",
  });

  function changeViewedMonth(target: EventTarget) {
    const select = target as HTMLSelectElement;
    const selectedMonth = select.value;

    document.querySelector("section#codewars--codewars-chart").remove();
    document
      .querySelector("main#codewars")
      .append(HonorScoreChart(selectedMonth));

    console.log(
      `%c CodeWars  Honor/Score Chart  Change View => %c ${select.value} `,
      "background:black; color:white",
      "background:black; color:#0f0; font-weight:900;"
    );
  }

  Header.append(img, SelectMonthBtn(changeViewedMonth), RefreshBtn());
  return Header;
}
