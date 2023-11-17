import HTML from "../../components/HTML/HTML";
import ChartDay from "./ChartDay";

export default function Chart(minMaxDailyHonor: number[]) {
  const styles =
    "bg-green-800 row-start-1 row-end-2 col-start-2 col-end-3 grid grid-cols-[repeat(20,_40px)] grid-rows-[repeat(10,_40px)]";
  const chart = HTML("div", styles);

  console.log(minMaxDailyHonor);

  chart.append(
    ChartDay(17, minMaxDailyHonor),
    ChartDay(39, minMaxDailyHonor),
    ChartDay(50, minMaxDailyHonor),
    ChartDay(40, minMaxDailyHonor),
    ChartDay(0, minMaxDailyHonor),
    ChartDay(46, minMaxDailyHonor),
    ChartDay(24, minMaxDailyHonor),
    ChartDay(100, minMaxDailyHonor),
    ChartDay(90, minMaxDailyHonor)
  );
  return chart;
}
