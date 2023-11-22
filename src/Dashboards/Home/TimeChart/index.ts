import Chart from "chart.js/auto";
import HTML from "../../../components/HTML/HTML";
import TimeChartConfig from "./TimeChartConfig";
import ChartLabelDays from "./ChartLabelDays";
// import HabitsTimeDatasets from "./HabitsTimeDatasets";
import AllHabitsDATA from "../habits-table/AllHabitsDATA";

export default function TimeChart() {
  const styles =
    "w-full h-[700px] flex justify-center py-4 mt-4 bg-indigo-800/5";
  const chartContainer = HTML("section", styles, "home--habits-time-chart");

  const styles2 = "border border-indigo-600/50";
  const chartCanvas = HTML("canvas", styles2) as HTMLCanvasElement;
  // -------------------
  const SELECTED_MONTH = "November";

  AllHabitsDATA().then((data) => {
    // ------------
    const AllHabitsNames = Array.from(Object.keys(data), (name) =>
      name.split("_").slice(2).join(" ")
    );

    // console.log(AllHabitsNames);

    // ------------

    const AllHabitsTimeDataset = [];

    for (const habit in data) {
      const habitMonth = [];
      for (const day in data[habit][SELECTED_MONTH]) {
        const time = data[habit][SELECTED_MONTH][day][1];
        if (Array.isArray(time)) {
          habitMonth.push(+time[4].split(":").slice(0, 2).join("."));
        } else {
          habitMonth.push(null);
        }
        // console.log(data[habit][SELECTED_MONTH]);
      }
      AllHabitsTimeDataset.push(habitMonth);
    }

    // console.log(AllHabitsTimeDataset);

    // console.log(DATA);
    // -------------------
    (async function () {
      new Chart(
        chartCanvas,
        TimeChartConfig(ChartLabelDays(), AllHabitsNames, AllHabitsTimeDataset)
      );
    })();
  });
  // -------------------
  chartContainer.append(chartCanvas);
  return chartContainer;
}
