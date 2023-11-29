import HTML from "../../components/HTML/HTML";
import RefreshBtn from "./RefreshBtn";
import SelectMonthBtn from "../../components/Settings/buttons/SelectMonthBtn";
import HonorScoreChart from "./HonorScoreChart";
import Badge from "./Badge";
import codewarsDATA from "./codewarsDATA";

export default function Header() {
  const styles = "flex justify-between";
  const Header = HTML("div", styles);

  function changeViewedMonth(target: EventTarget) {
    const select = target as HTMLSelectElement;
    const selectedMonth = select.value;

    document.querySelector("section#codewars--codewars-chart").remove();
    document
      .querySelector("main#codewars")
      .append(HonorScoreChart(selectedMonth));

    console.log(
      `%c CodeWars  Honor/Score Chart  Change View => %c ${
        select.value.split("-")[0]
      } `,
      "background:black; color:white",
      "background:black; color:#0f0; font-weight:900;"
    );
  }

  // SelectMonthBtn & RefreshBtn wrraper
  const wrraper1 = HTML("div", "flex gap-x-2");
  wrraper1.append(SelectMonthBtn(changeViewedMonth), RefreshBtn());
  // ----------------------------------
  const wrraper2 = HTML("div", "flex gap-x-1");
  // get DATA!
  codewarsDATA().then((data) => {
    const rank = data["data"]["Rank"];
    const honor = data["data"]["Honor"];
    const leaderboardPositionor = data["data"]["Leaderboard Position"];
    const CompletedKata = data["data"]["Total Completed Kata"];

    // Header Badges
    const Rank = Badge(`Rank: ${-rank} kyu`);
    const Honor = Badge(`Honor: ${honor}`);
    const LeaderboardPosition = Badge(
      `Leaderboard Position:#${leaderboardPositionor.toLocaleString()}`
    );
    // 600_000 is not
    const HonorPercentile = Badge(
      `Top ${((leaderboardPositionor / 600_000) * 100).toFixed(3)}%`
    );
    const TotalCompletedKata = Badge(`Completed Kata: ${CompletedKata}`);

    wrraper2.append(
      Rank,
      Honor,
      LeaderboardPosition,
      HonorPercentile,
      TotalCompletedKata
    );
  });
  // ----------------------------------
  Header.append(wrraper2, wrraper1);
  return Header;
}
