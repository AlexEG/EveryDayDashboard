import HTML from "../../components/HTML/HTML";

export default function ChartDay(dayScore: number, minMaxDailyHonor: number[]) {
  // --------------
  const COLS_NUM = 39;
  const [min, max] = minMaxDailyHonor;
  const nextScoreValue = (max - min) / COLS_NUM;

  const YAxisChartTilteScoresArr = [];

  for (let i = 0; i <= COLS_NUM; i++) {
    const num = String(Math.round(nextScoreValue * i) + min);
    YAxisChartTilteScoresArr.push(+num);
  }

  console.log(YAxisChartTilteScoresArr);

  // --------------
  const styles =
    "odd:bg-pink-500 even:bg-yellow-500 row-span-full grid grid-cols-1 grid-rows-[repeat(40,_10px)]";
  const ChartDay = HTML("div", styles, "", "", { title: String(dayScore) });

  for (let i = 0; i < YAxisChartTilteScoresArr.length; i++) {
    console.log(i);
    if (dayScore >= YAxisChartTilteScoresArr[i]) continue;
    const box = HTML("div", "h-full bg-green-800 z-10");
    ChartDay.append(box);
  }

  return ChartDay;
}
