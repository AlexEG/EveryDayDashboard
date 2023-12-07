import Chart from "chart.js/auto";
import HTML from "../../../components/HTML/HTML";
import TimeChartConfig from "./TimeChartConfig";
import ChartLabelDays from "./ChartLabelDays";
import HabitTrackerDATA from "../HabitTrackerDATA";

export default function TrackerTimeChart(year?: number, month?: number) {
  const styles =
    "w-full h-[800px] flex justify-center p-4 mt-4 bg-indigo-800/5 bg-indigo-50";
  const chartContainer = HTML("section", styles);

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

  const thisMonthNum = month || new Date().getMonth();
  const SELECTED_MONTH = MONTHS[thisMonthNum];

  HabitTrackerDATA().then((data) => {
    console.log(data);
    // ------------
    const AllHabitsNames = Array.from(Object.keys(data), (name) =>
      name.match(/(?<=\d+_).*/)[0].replace(/_/g, " ")
    );

    // console.log(AllHabitsNames);

    // ------------

    const AllHabitsTimeDataset = [];

    for (const [fileName, value] of Object.entries(data)) {
      // console.log(fileName, value);
      const habitNum = fileName.match(/\d+(?=_)/)[0];
      const habitName = fileName.match(/(?<=\d+_).*/)[0].replace(/_/g, " ");

      const metadata = value["metadata"];
      const habitData = value["habitData"];

      const thisMonthData =
        habitData["2023"] && habitData["2023"][SELECTED_MONTH];
      const habitGroupColor = metadata["groupColor"];

      // {
      //   console.log("habitNum: ", habitNum);
      //   console.log("habitName: ", habitName);
      //   console.log("habitGroupColor: ", habitGroupColor);
      //   console.log("thisMonthData: ", thisMonthData);
      //   console.log("metadata: ", metadata);
      // }

      const habitMonth = [];

      for (let i = 1; i <= 31; i++) {
        const isChecked_time = thisMonthData ? thisMonthData[i] : false;
        // console.log(isChecked_time);

        if (isChecked_time) {
          habitMonth.push(+isChecked_time[4].split(":").slice(0, 2).join("."));
        } else {
          habitMonth.push(null);
        }
      }
      // console.log(habitMonth);

      AllHabitsTimeDataset.push(habitMonth);
    }

    // console.log(AllHabitsTimeDataset);

    // -------------------
    (async function () {
      new Chart(
        chartCanvas,
        TimeChartConfig(
          ChartLabelDays(year, month),
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
