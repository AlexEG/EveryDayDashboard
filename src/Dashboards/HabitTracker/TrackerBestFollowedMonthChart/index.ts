import Chart from "chart.js/auto";
import HTML from "../../../components/HTML/HTML";
import TrackerBestFollowedMonthChartConfig from "./TrackerBestFollowedMonthChartConfig";
import HabitTrackerDATA from "../HabitTrackerDATA";

export default function TrackerBestFollowedMonthChart(year?: number) {
  const styles =
    "w-full h-[700px] flex justify-center p-4 mt-4 bg-indigo-800/5";
  const chartContainer = HTML(
    "section",
    styles,
    "habit-tracker--tracker-best-followed-month-chart",
  );

  const styles2 = "border border-cyan-600/50";
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

  const thisYear = year || DATE.getFullYear();

  HabitTrackerDATA().then((data) => {
    // console.log(data);
    // ------------
    const yearDataset = {};
    // ------------
    for (const key of MONTHS) {
      yearDataset[key] = 0;
    }
    // console.log("yearDataset", yearDataset);

    for (const [, value] of Object.entries(data)) {
      const habitData = value["habitData"];

      // console.log("habitData", habitData);

      const thisYearData = habitData[thisYear] && habitData[thisYear];

      // console.log("thisYearData", thisYearData);

      for (const key in thisYearData) {
        // console.log("thisYearData " + key, thisYearData[key]);
        const numberOfCheckedInMonth = Object.keys(thisYearData[key]).length;
        // console.log("monthValues " + key, monthValues);

        yearDataset[key]
          ? (yearDataset[key] += numberOfCheckedInMonth)
          : (yearDataset[key] = numberOfCheckedInMonth);
      }
    }

    // console.log("yearDataset", yearDataset);

    // -------------------
    (async function () {
      new Chart(
        chartCanvas,
        TrackerBestFollowedMonthChartConfig(
          MONTHS,
          Object.values(yearDataset),
          thisYear,
        ),
      );
    })();
  });
  // -------------------
  chartContainer.append(chartCanvas);
  return chartContainer;
}
