import Chart from "chart.js/auto";
import HTML from "../../../components/HTML/HTML";
import TrackerTimeChartConfig from "./TrackerTimeChartConfig";
import ChartLabelDays from "./ChartLabelDays";
import HabitTrackerDATA from "../HabitTrackerDATA";

export default function TrackerTimeChart(year?: number, month?: number) {
  const styles =
    "w-full h-[800px] flex justify-center p-4 mt-4 bg-indigo-800/5 bg-indigo-50";
  const chartContainer = HTML(
    "section",
    styles,
    "habit-tracker--tracker-time-chart"
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

  const numberOfDaysInThisMonth = new Date(
    thisYear,
    thisMonthNum - 1,
    0
  ).getDate();

  HabitTrackerDATA().then((data) => {
    // console.log(data);
    // ------------
    const AllHabitsNames: string[] = [];

    // console.log(AllHabitsNames);

    // ------------

    const AllHabitsTimeDataset = [];
    const habitsChartColor: string[] = [];
    // const habitGroupColor: string[] = [];

    for (const [fileName, value] of Object.entries(data)) {
      // console.log(fileName, value);

      // const habitNum = fileName.match(/\d+(?=_)/)[0];
      const habitName = fileName.match(/(?<=\d+_).*/)[0].replace(/_/g, " ");

      const metadata = value["metadata"];
      const habitData = value["habitData"];

      const thisMonthData =
        habitData[thisYear] && habitData[thisYear][SELECTED_MONTH];

      {
        AllHabitsNames.push(habitName);
        habitsChartColor.push(metadata["chartColor"]);
        // habitGroupColor.push(metadata["groupColor"]);
      }

      // {
      //   console.log("habitNum: "        , habitNum);
      //   console.log("habitName: "       , habitName);
      //   console.log("habitGroupColor: " , habitGroupColor);
      //   console.log("thisMonthData: "   , thisMonthData);
      //   console.log("metadata: "        , metadata);
      // }

      const habitMonth = [];

      for (let i = 1; i <= numberOfDaysInThisMonth; i++) {
        const isChecked_time = thisMonthData ? thisMonthData[i] : false;
        // console.log(isChecked_time);

        if (isChecked_time) {
          habitMonth.push(+isChecked_time.split(/:/).slice(0, 2).join("."));
          // console.log(+isChecked_time[4].split(":").slice(0, 2).join("."));
        } else {
          habitMonth.push(null);
        }
      }
      // console.log(habitMonth);

      AllHabitsTimeDataset.push(habitMonth);
    }

    // console.log(AllHabitsTimeDataset);
    console.log(habitsChartColor);

    // -------------------
    (async function () {
      new Chart(
        chartCanvas,
        TrackerTimeChartConfig(
          ChartLabelDays(year, month),
          habitsChartColor,

          AllHabitsNames,
          AllHabitsTimeDataset
        )
      );
    })();
  });
  // -------------------
  chartContainer.append(chartCanvas);
  return chartContainer;
}
