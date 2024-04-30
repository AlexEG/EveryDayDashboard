export default function TrackerBestFollowedDayChartConfig(
  labelsDays: string[],
  monthDataset: number[],
  numberOfHaibts: number,
  thisYear: number,
  SELECTED_MONTH: string,
) {
  console.log("labelsDays:", labelsDays);
  console.log("monthDataset:", monthDataset);
  console.log("numberOfHaibts:", numberOfHaibts);
  console.log("thisYear:", thisYear);
  console.log("SELECTED_MONTH:", SELECTED_MONTH);

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
      text: `Best Followed Day in ${SELECTED_MONTH}, ${thisYear}`,
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
        },
      ],
    },
    options: {
      animation: false,
      plugins: plugins,
      scales: {
        x: XAaxis,
        y: YAaxis,
      },
    },
  };
}
