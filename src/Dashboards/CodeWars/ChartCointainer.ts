import HTML from "../../components/HTML/HTML";
import HonorColumn from "./HonorColumn";
import DaysRow from "./DaysRow";
import Chart from "./Chart";
import YAxisChartTilteScores from "./YAxisChartTilteScores";

export default function ChartCointainer(
  daysNum: number,
  minMaxDailyHonor: number[]
) {
  const styles =
    "border grid grid-cols-[2.5rem_1fr] grid-rows-[1fr_2.5rem] mt-20 mx-auto";

  const ChartContainer = HTML("section", styles);

  const YAxisChartTilteScoresArr = YAxisChartTilteScores(minMaxDailyHonor);

  ChartContainer.style.width = `${(daysNum + 1) * 40 + 1}px`;
  ChartContainer.append(
    HonorColumn(minMaxDailyHonor),
    DaysRow(daysNum),
    Chart(minMaxDailyHonor)
  );
  return ChartContainer;
}
