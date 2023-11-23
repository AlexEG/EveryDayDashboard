import Chart from "chart.js/auto";
import HTML from "../../components/HTML/HTML";
import LanguagesChartConfig from "./LanguagesChartConfig";

export default function LanguagesChart() {
  const styles =
    "w-full h-[800px] flex justify-center p-4 mt-4 bg-indigo-800/5";
  const chartContainer = HTML("section", styles, "codewars--codewars-chart");

  const chartCanvas = HTML("canvas") as HTMLCanvasElement;

  // ----------------

  const CodewarsDashboardDATA = new Promise((res, rej) => {
    res(JSON.parse(window.DATA.getJSONFileData("dashboards/codewars")));
  });

  CodewarsDashboardDATA.then((data) => {
    const totalScore = data["data"]["Score"];
    const LanguagesNames = [];
    const LanguagesScores = [];

    for (const key in data["data"]["Languages"]) {
      LanguagesNames.push(`${key}  ${data["data"]["Languages"][key]["name"]}`);
      LanguagesScores.push(data["data"]["Languages"][key]["score"]);
    }
    // ----------------
    (async function () {
      new Chart(
        chartCanvas,
        LanguagesChartConfig(totalScore, LanguagesNames, LanguagesScores)
      );
    })();
    // ----------------
  });

  chartContainer.append(chartCanvas);
  return chartContainer;
}
