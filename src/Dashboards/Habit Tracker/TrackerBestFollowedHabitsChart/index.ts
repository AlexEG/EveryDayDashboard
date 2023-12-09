import Chart from "chart.js/auto";
import HTML from "../../../components/HTML/HTML";
import TrackerBestFollowedHabitsChartConfig from "./TrackerBestFollowedHabitsChartConfig";
import HabitTrackerDATA from "../HabitTrackerDATA";

export default function TrackerBestFollowedHabitsChart(
  year?: number,
  month?: number
) {
  const styles =
    "w-full h-[800px] flex justify-center p-4 mt-4 bg-indigo-800/5 bg-indigo-50";
  const chartContainer = HTML(
    "section",
    styles,
    "habit-tracker--tracker-best-followed-habits-chart"
  );

  const styles2 = "border border-indigo-600/50";
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

  const numberOfDaysInThisMonth =
    month && year && new Date(thisYear, thisMonthNum - 1, 0).getDate();

  HabitTrackerDATA().then((data) => {
    // console.log(data);
    // ------------

    // ------------
    const bestFollowedHabitsData = [];

    for (const [fileName, value] of Object.entries(data)) {
      const habitName = fileName.match(/(?<=\d+_).*/)[0].replace(/_/g, " ");

      const metadata = value["metadata"];
      const habitData = value["habitData"];

      const thisMonthData =
        habitData[thisYear] && habitData[thisYear][SELECTED_MONTH];

      console.log(thisMonthData);

      const thisHabitData = [];

      {
        thisHabitData.push(habitName);
        thisHabitData.push(metadata["chartColor"]);
      }

      const habitMonth = [];
      const today = +Date().match(/\d{2}/g)[0];

      for (let i = 1; i <= (numberOfDaysInThisMonth | today); i++) {
        const isChecked_time = thisMonthData ? thisMonthData[i] : false;
        isChecked_time ? habitMonth.push(1) : habitMonth.push(0);
      }

      thisHabitData.push(habitMonth.reduce((acc, x) => acc + x));

      bestFollowedHabitsData.push(thisHabitData);
    }

    bestFollowedHabitsData.sort((a, b) => b[2] - a[2]);
    console.log(bestFollowedHabitsData);
    // add habit chart color + name + score

    // -------------------
    (async function () {
      new Chart(
        chartCanvas,
        TrackerBestFollowedHabitsChartConfig(
          bestFollowedHabitsData,
          numberOfDaysInThisMonth
        )
      );
    })();
  });
  // -------------------
  chartContainer.append(chartCanvas);
  return chartContainer;
}
