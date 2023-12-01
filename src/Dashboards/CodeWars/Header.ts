import HTML from "../../components/HTML/HTML";
import RefreshBtn from "./RefreshBtn";
import SelectMonthBtn from "../../components/Settings/buttons/SelectMonthBtn";
import HonorScoreChart from "./HonorScoreChart";
import Badge from "./Badge";
import codewarsDATA from "./codewarsDATA";

export default function Header() {
  const styles = "flex justify-between";
  const Header = HTML("div", styles);

  function changeViewedMonth(select: HTMLSelectElement) {
    const PREF_LOG_START = Date.now();
    // ---------
    const SELECTED_YEAR = 2023;
    const [selectedMonthName, selectedNum] = select.value.split("-");

    document.querySelector("section#codewars--codewars-chart").remove();
    const codewarsContainer = document.querySelector("main#codewars");

    codewarsContainer.insertBefore(
      HonorScoreChart(SELECTED_YEAR, +selectedNum),
      codewarsContainer.querySelector("#codewars--Languages-rank-chart")
    );

    const LOG_CSS = [
      "background:#000; color:#fff",
      "background:#000; color:#f9f",
      "background:#000; color:#0f0; font-weight:900",
    ];
    console.log(
      `%c Home / HonorScore Chart %c<Change View>  %c${SELECTED_YEAR} ${selectedMonthName} `,
      ...LOG_CSS
    );

    // ---------
    const PREF_LOG_END = Date.now();
    const PREF_LOG_CSS = [
      "background:#000; color:#fff",
      "background:#000; color:#0f0",
    ];
    console.log(
      `%c Preformance / Time  %c${PREF_LOG_END - PREF_LOG_START}ms`,
      ...PREF_LOG_CSS
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
