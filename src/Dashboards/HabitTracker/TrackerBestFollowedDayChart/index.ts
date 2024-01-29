import Chart from "chart.js/auto";
import HTML from "../../../components/HTML/HTML";
import TrackerBestFollowedDayChartConfig from "./TrackerBestFollowedDayChartConfig";
import HabitTrackerDATA from "../HabitTrackerDATA";
import ChartLabelDays from "../TrackerTimeChart/ChartLabelDays";

export default function TrackerBestFollowedDayChart(
  year?: number,
  month?: number,
) {
  const styles =
    "w-full h-[700px] flex justify-center p-4 mt-4 bg-indigo-800/5";
  const chartContainer = HTML(
    "section",
    styles,
    "habit-tracker--tracker-best-followed-day-chart",
  );

  const styles2 = "border border-rose-600/50";
  const chartCanvas = HTML("canvas", styles2) as HTMLCanvasElement;
  // -------------------
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
  const DATE = new Date();

  const thisMonthNum = month || DATE.getMonth();
  const thisYear = year || DATE.getFullYear();

  const SELECTED_MONTH = MONTHS[thisMonthNum];

  HabitTrackerDATA().then((data) => {
    // console.log(data);
    // ------------
    const numberOfHaibts = Object.keys(data).length;
    const monthDataset = {};
    // ------------

    for (const [, value] of Object.entries(data)) {
      const habitData = value["habitData"];

      const thisMonthData =
        habitData[thisYear] && habitData[thisYear][SELECTED_MONTH];

      // console.log("thisMonthData", thisMonthData);

      for (const key in thisMonthData) {
        monthDataset[key] ? (monthDataset[key] += 1) : (monthDataset[key] = 1);
      }
    }

    // console.log("monthDataset", monthDataset);

    // -------------------
    (async function () {
      new Chart(
        chartCanvas,
        TrackerBestFollowedDayChartConfig(
          ChartLabelDays(year, month),
          Object.values(monthDataset),
          numberOfHaibts,
          thisYear,
          SELECTED_MONTH,
        ),
      );
    })();
  });
  // -------------------
  chartContainer.append(chartCanvas);
  return chartContainer;
}
