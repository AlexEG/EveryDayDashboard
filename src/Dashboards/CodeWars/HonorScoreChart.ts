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

  selectedMonth && console.log(numberOfDaysInThisMonth);
  selectedMonth && console.log(selectedMonthNum);
  selectedMonth && console.log(selectedMonth);
  // ---------------

  const styles = "w-full";
  const chartContainer = HTML("section", styles, "codewars--codewars-chart");

  const styles2 = "w-full";
  const chartCanvas = HTML("canvas", styles2);

  // ----------------

  const CodewarsDashboardDATA = new Promise((res, rej) => {
    res(JSON.parse(window.DATA.getJSONFileData("dashboards/codewars")));
  });

  CodewarsDashboardDATA.then((data) => {
    const dailyHonor = Object.entries(data["data"]["daily honor"]);

    const labelsDays = [];
    const honorDataset = [];
    const scoreDataset = [];

    // for 30 Days view
    for (let i = 0; i < numberOfDaysInThisMonth; i++) {
      // X axis Labels
      const day = `${SELECTED_MONTH} ${i + 1}`;
      labelsDays.push(day);
    }

    // get data from dashboard/codewars.json
    for (const [dayName, [DailyHonor, DailyScore]] of dailyHonor) {
      // get the chosen month only
      if (!(dayName.split(" ")[1] === SELECTED_MONTH)) continue;
      // Honor Dataset
      honorDataset.push(DailyHonor);
      // Score Dataset
      scoreDataset.push(DailyScore);
    }

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
