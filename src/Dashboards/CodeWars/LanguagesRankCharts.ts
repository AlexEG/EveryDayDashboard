import Chart from "chart.js/auto";
import HTML from "../../components/HTML/HTML";
import codewarsDATA from "./codewarsDATA";
import LanguagesRankChartsConfig from "./LanguagesRankChartsConfig";

export default function LanguagesRankCharts() {
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

  const LANGUAGES_COLORS = {
    javascript: "#eab308",
    typescript: "#0ea5e9",
    go: "#be123c",
  };

  const styles = "w-full flex justify-center gap-2 p-4 mt-4 bg-indigo-800/5";
  const chartContainer = HTML("section", styles, "codewars--Languages--chart");

  // -------------------------
  codewarsDATA().then((data) => {
    console.log(data);

    for (const langName in data["data"]["Languages"]) {
      // 1. markup: Canvas for each doughnut Chart
      const div = HTML("div", "h-60 w-60 border border-indigo-600/50 relative");
      const chartCanvas = HTML("canvas") as HTMLCanvasElement;
      chartContainer.append(div);
      const styles =
        "text-indigo-100/50 text-center absolute top-[57%] left-0 right-0";
      const span = HTML("span", styles);
      div.append(chartCanvas, span);

      // 2. get the right lang color
      const langColor = LANGUAGES_COLORS[langName];
      // console.log(LANGUAGES_COLORS);
      // console.log(langName);
      // console.log(langColor);

      // 4. lang rank
      const langRank = -data["data"]["Languages"][langName]["rank"];
      // console.log(langRank);

      // 3. get the lang score
      const langScore =
        data["data"]["Languages"][langName]["score"] -
        REQUIRED_SCORE_TO_RANK_UP[`${langRank} kyu`][0];
      // console.log(langScore);

      // 5. get lang score for next rank
      const langNextRankRequiredScore =
        REQUIRED_SCORE_TO_RANK_UP[`${langRank - 1} kyu`][0];
      // console.log(
      //   "Next Rank Required Score: ",
      //   langNextRankRequiredScore,
      //   `${langRank - 1}kyu`
      // );

      // 6. next lang rank name
      const langNextRankName = `${langRank - 1} kyu`;

      // 7. add progress to the center of the chart
      const progress = `${+(
        (langScore / langNextRankRequiredScore) *
        100
      ).toFixed(1)}%`;
      span.textContent = progress;

      // make the chart!
      (async function () {
        new Chart(
          chartCanvas,
          LanguagesRankChartsConfig(
            langName,
            langColor,
            langScore,
            langNextRankRequiredScore,
            langNextRankName
          )
        );
      })();
    }
  });
  // -------------------------

  return chartContainer;
}
