export default function TrackerBestFollowedDayChartConfig(
  labelsDays: string[],
  monthDataset: number[],
  numberOfHaibts: number
) {
  const XAaxis = {
    grid: {
      color: "#ffffff09",
    },
  };
  const YAaxis = {
    min: 0,
    max: numberOfHaibts,
    ticks: {
      stepSize: 1,
    },
    grid: {
      color: "#e11d4833",
    },
  };

  const plugins = {
    title: {
      display: true,
      text: "Tracker Best Followed Day This Month",
    },
    legend: {
      display: false,
    },
  };

  return {
    type: "bar",
    data: {
      labels: labelsDays,
      datasets: [
        {
          label: "Checked ",
          data: monthDataset,
          borderWidth: 1,
          backgroundColor: "#e11d48",
          // borderColor: "#60a5fa",
        },
      ],
    },
    options: {
      plugins: plugins,
      scales: {
        x: XAaxis,
        y: YAaxis,
      },
    },
  };
}
