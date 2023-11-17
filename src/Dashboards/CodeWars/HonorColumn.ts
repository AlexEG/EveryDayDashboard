import HTML from "../../components/HTML/HTML";

export default function HonorColumn(minMaxDailyHonor: number[]) {
  const COLS_NUM = 9;

  const styles =
    "h-full bg-green-400 row-start-1 row-end-2 col-start-1 col-end-2 flex flex-col-reverse";
  const honorColumn = HTML("div", styles);

  const styles2 =
    "border h-full w-10 bg-blue-400 flex justify-center items-center text-pink-50 font-semibold";

  // get the scores
  const [min, max] = minMaxDailyHonor;
  const nextScoreValue = (max - min) / COLS_NUM;

  // render scores
  const score = HTML("div", styles2, "1", "0");
  honorColumn.append(score);
  // ----
  for (let i = 0; i <= COLS_NUM; i++) {
    const num = String(Math.round(nextScoreValue * i) + min);

    const score = HTML("div", styles2, String(i + 1), num);
    honorColumn.append(score);
  }

  return honorColumn;
}
