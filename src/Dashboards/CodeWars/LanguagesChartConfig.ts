export default function LanguagesChartConfig(
  totalScore: number,
  LanguagesNames: string[],
  LanguagesScores: number[]
) {
  const plugins = {
    title: {
      display: true,
      text: `Languages Total Score: ${totalScore}`,
    },
  };

  return {
    type: "doughnut",
    options: {
      plugins: plugins,
    },
    data: {
      labels: LanguagesNames,
      datasets: [
        {
          label: "Score",
          data: LanguagesScores,
          backgroundColor: [
            "#eab308",
            "#0ea5e9",
            "#be123c",
            "#9333ea",
            "#4f46e5",
            "#1d4ed8",
            "#16a34a",
          ],
          borderWidth: 0,
          hoverOffset: 20,
        },
      ],
    },
  };
}
