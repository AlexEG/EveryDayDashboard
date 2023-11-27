import Chart from "chart.js/auto";
import HTML from "../../components/HTML/HTML";
import OverallRankConfig from "./OverallRankConfig";
import codewarsDATA from "./codewarsDATA";

export default function OverallRank() {
  const styles = "w-full  flex justify-center p-4 mt-4 bg-indigo-800/5";
  const chartContainer = HTML(
    "section",
    styles,
    "codewars--overall-rank--chart"
  );
  const chartCanvas = HTML("canvas") as HTMLCanvasElement;
  const div = HTML("div", "w-fit border border-indigo-600/50 relative");

  const styles2 =
    "text-indigo-100/50 text-center absolute top-[57%] left-0 right-0";
  const span = HTML("span", styles2, "", "hh");
  div.append(chartCanvas, span);
  chartContainer.append(div);

  const REQUIRED_SCORE_TO_RANK_UP = {
    "8 kyu": [0, 0],
    "7 kyu": [20, 20],
    "6 kyu": [76, 96],
    "5 kyu": [229, 325],
    "4 kyu": [643, 968],
    "3 kyu": [1_768, 2_736],
    "2 kyu": [4_829, 7_565],
    "1 kyu": [13_147, 20_712],
  };

  // ----------------

  codewarsDATA().then((data) => {
    const totalScore = data["data"]["Score"];
    const rank = -data["data"]["Rank"];
    const nextRankScore = REQUIRED_SCORE_TO_RANK_UP[`${rank - 1} kyu`][0];
    // all ranks socres before 'rank' - 'totalScore'
    const myScore = REQUIRED_SCORE_TO_RANK_UP[`${rank} kyu`][1] - totalScore;

    const progress = `${+((myScore / nextRankScore) * 100).toFixed(1)}%`;
    span.textContent = progress;

    // console.log(nextRankScore);
    // ----------------
    (async function () {
      new Chart(chartCanvas, OverallRankConfig(myScore, nextRankScore));
    })();
    // ----------------
  });

  return chartContainer;
}
