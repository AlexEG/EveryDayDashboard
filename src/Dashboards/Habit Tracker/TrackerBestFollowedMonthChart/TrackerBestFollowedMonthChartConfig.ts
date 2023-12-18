export default function TrackerBestFollowedMonthChartConfig(
  MONTHS: string[],
  monthDataset: number[],
  thisYear: number
) {
  // console.log("thisYear", thisYear);
  const XAaxis = {
    grid: {
      color: "#ffffff09",
    },
  };
  const YAaxis = {
    grid: {
      color: "#0284c733",
    },
  };

  const plugins = {
    title: {
      display: true,
      text: `Best Followed Month in ${thisYear}`,
    },
    legend: {
      display: false,
    },
  };

  return {
    type: "bar",
    data: {
      labels: MONTHS,
      datasets: [
        {
          label: "Checked ",
          data: monthDataset,
          borderWidth: 1,
          backgroundColor: "#0284c7",
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
