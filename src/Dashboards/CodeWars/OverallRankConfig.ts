export default function OverallRankConfig(
  myScore: number,
  nextRankScore: number,
) {
  const plugins = {
    title: {
      display: true,
      text: `Languages Total Score: ${myScore}`,
    },
  };

  return {
    type: "doughnut",
    options: {
      plugins: plugins,
    },
    data: {
      labels: ["My Score", "Next Rank"],
      datasets: [
        {
          label: "Score",
          data: [myScore, nextRankScore - myScore],
          backgroundColor: ["#ffffffcc", "#ffffff22"],
          borderWidth: 0,
          hoverOffset: 20,
        },
      ],
    },
  };
}
