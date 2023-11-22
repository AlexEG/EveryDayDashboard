import Chart from "chart.js/auto";
import HTML from "../../components/HTML/HTML";
import HonorScoreChartConfig from "./HonorScoreChartConfig";

export default function HonorScoreChart(selectedMonth?: string) {
  const date = new Date();
  const thisMonth = date.toDateString().split(" ");
  const thisMonthNum = date.getMonth() + 1;
  const SELECTED_MONTH =
    (selectedMonth && selectedMonth.split("-")[0].slice(0, 3)) || thisMonth[1];
  const selectedMonthNum = selectedMonth && +selectedMonth.split("-")[1];

  const numberOfDaysInThisMonth = new Date(
    +thisMonth[3],
    selectedMonthNum + 1 || thisMonthNum,
    0
  ).getDate();

  // ---------------

  const styles = "w-full flex justify-center py-4 mt-4 bg-indigo-800/5";
  const chartContainer = HTML("section", styles, "codewars--codewars-chart");

  const styles2 = "max-w-7xl border border-indigo-600/50";
  const chartCanvas = HTML("canvas", styles2) as HTMLCanvasElement;

  // ----------------

  const CodewarsDashboardDATA = new Promise((res, rej) => {
    res(JSON.parse(window.DATA.getJSONFileData("dashboards/codewars")));
  });

  CodewarsDashboardDATA.then((data) => {
    const dailyHonor = Object.entries(data["data"]["daily honor"]);

    const labelsDays: string[] = [];
    const honorDataset: number[] = [];
    const scoreDataset: number[] = [];

    // for 30 Days view
    for (let i = 0; i < numberOfDaysInThisMonth; i++) {
      // X axis Labels
      const day = `${SELECTED_MONTH} ${i + 1}`;
      labelsDays.push(day);

      //TODO
      // "2023": {
      //   "November": {
      //     "Mon 20": [8, 4, 231, 184],
      //     "Tue 21": [8, 4, 231, 184]
      //   }
      // }

      //  if (!(dailyHonor[i][0].split(" ")[1] === SELECTED_MONTH)) continue;

      if (!(dailyHonor[i][1].split(" ")[2] === i + 1)) {
        // Honor Dataset
        honorDataset.push(+dailyHonor[i][1][0]);
        // Score Dataset
        scoreDataset.push(+dailyHonor[i][1][1]);
      }
    }

    // get data from dashboard/codewars.json
    // for (const [dayName, [DailyHonor, DailyScore]] of dailyHonor) {
    //   // get the chosen month only
    //   if (!(dayName.split(" ")[1] === SELECTED_MONTH)) continue;
    //   // Honor Dataset
    //   honorDataset.push(+DailyHonor);
    //   // Score Dataset
    //   scoreDataset.push(+DailyScore);
    // }

    // ----------------
    (async function () {
      new Chart(
        chartCanvas,
        HonorScoreChartConfig(labelsDays, honorDataset, scoreDataset)
      );
    })();

    // ----------------
  });
  // ----------------

  chartContainer.append(chartCanvas);
  return chartContainer;
}
