import HTML from "../../components/HTML/HTML";
import ChartDay from "./ChartDay";

export default function Chart() {
  const styles =
    "bg-green-400/30 row-start-1 row-end-2 col-start-2 col-end-3 grid grid-cols-[repeat(20,_40px)] grid-rows-[repeat(10,_40px)]";
  const chart = HTML("div", styles);

  chart.append(ChartDay(14), ChartDay(9), ChartDay(19), ChartDay(23));
  return chart;
}