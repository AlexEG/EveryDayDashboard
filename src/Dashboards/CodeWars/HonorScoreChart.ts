import Chart from "chart.js/auto";
import HTML from "../../components/HTML/HTML";
import HonorScoreChartConfig from "./HonorScoreChartConfig";

export default function HonorScoreChart(selectedMonth?: string) {
  const date = new Date();
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const thisYear = date.getFullYear();
  const thisMonthNum = date.getMonth();

  const SELECTED_YEAR = thisYear;
  const SELECTED_MONTH =
    (selectedMonth && selectedMonth.split("-")[0]) || MONTHS[thisMonthNum];
  // console.log(SELECTED_MONTH); //=> November

  const selectedMonthNum = selectedMonth && +selectedMonth.split("-")[1];

  const numberOfDaysInThisMonth = new Date(
    thisYear,
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
    if (!data["data"]["daily honor Score"][SELECTED_YEAR][SELECTED_MONTH]) {
      console.log(
        `%c CodeWars  Honor/Score Chart \n%c There is NO DATA for ${SELECTED_MONTH}`,
        "background:black; color:white",
        "background:black; color:#f00; font-weight:900;"
      );
      return;
    }

    const dailyHonorScore = data["data"]["daily honor Score"];
    const MonthData = dailyHonorScore[SELECTED_YEAR][SELECTED_MONTH];

    const labelsDays: string[] = [];
    const honorDataset: number[] = [];
    const scoreDataset: number[] = [];

    // for 30 Days view
    for (let i = 0; i < numberOfDaysInThisMonth; i++) {
      // X axis Labels
      const dayOfWeek = new Date(`${SELECTED_MONTH} ${i + 1}, ${thisYear}`)
        .toString()
        .slice(0, 4);

      const day = `${dayOfWeek} ${i + 1}`;
      labelsDays.push(day);

      if (MonthData[String(i + 1)]) {
        // Honor Dataset
        honorDataset.push(MonthData[String(i + 1)]["DailyHonor"]);
        // Score Dataset
        scoreDataset.push(MonthData[String(i + 1)]["DailyScore"]);
      } else {
        honorDataset.push(0);
        scoreDataset.push(0);
      }
    }

    // get data from dashboard/codewars.json

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
