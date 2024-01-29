export default function LanguagesRankChartsConfig(
  langName: string,
  langColor: string,
  langScore: number,
  langNextRankRequiredScore: number,
  langNextRankName: string,
) {
  const plugins = {
    title: {
      display: true,
      text: `Next Rank (${langNextRankName} | ${langNextRankRequiredScore})`,
    },
  };

  return {
    type: "doughnut",
    options: {
      plugins: plugins,
    },
    data: {
      labels: [langName, "Next Rank"],
      datasets: [
        {
          label: "Score",
          data: [langScore, langNextRankRequiredScore - langScore],
          backgroundColor: [langColor, "#ffffff22"],
          borderWidth: 0,
          hoverOffset: 10,
        },
      ],
    },
  };
}
