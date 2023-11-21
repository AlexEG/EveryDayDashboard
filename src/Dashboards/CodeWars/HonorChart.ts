import Chart from "chart.js/auto";
import HTML from "../../components/HTML/HTML";
import HonorChartConfig from "./HonorChartConfig";

export default function HonorChart() {
  const styles = "w-full";
  const chartCanvas = HTML("canvas", styles, "codewars-chart");

  // ----------------

  const CodewarsDashboardDATA = new Promise((res, rej) => {
    res(JSON.parse(window.DATA.getJSONFileData("dashboards/codewars")));
  });

  CodewarsDashboardDATA.then((data) => {
    const dailyHonor = Object.entries(data["data"]["daily honor"]);

    console.log(dailyHonor);

    const SELECTED_MONTH = "Nov";

    const labelsDays = [];
    const honorDataset = [];

    for (const [dayName, [DailyHonor]] of dailyHonor) {
      // get the chosen month only
      if (!(dayName.split(" ")[1] === SELECTED_MONTH)) continue;

      // X axis Labels
      const day = dayName.split(" ").slice(1, 3).join(" ");
      labelsDays.push(day);

      // Honor Dataset
      honorDataset.push(DailyHonor);
    }

    // ----------------

    (async function () {
      new Chart(chartCanvas, HonorChartConfig(labelsDays, honorDataset));
    })();

    // ----------------
  });
  // ----------------

  return chartCanvas;
}
