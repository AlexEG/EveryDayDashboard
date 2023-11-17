export default function YAxisChartTilteScores(minMaxDailyHonor: number[]) {
  const COLS_NUM = 9;
  const [min, max] = minMaxDailyHonor;
  const nextScoreValue = (max - min) / COLS_NUM;

  const YAxisChartTilteScores = [0];

  for (let i = 0; i <= COLS_NUM; i++) {
    const num = String(Math.round(nextScoreValue * i) + min);
    YAxisChartTilteScores.push(+num);
  }

  return YAxisChartTilteScores;
}
