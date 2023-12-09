export default function TrackerBestFollowedHabitsChartConfig(
  bestFollowedHabitsData: any[],
  numberOfDaysInThisMonth?: number
) {
  const datasets: any = [];

  // console.log(AllHabitsNames);
  // console.log(AllHabitsTimeDataset);

  for (let i = 0; i < bestFollowedHabitsData.length; i++) {
    // console.log(AllHabitsNames[i]);
    const dataset = {
      label: [`{${i + 1}} ${bestFollowedHabitsData[i][0]} `],
      data: [bestFollowedHabitsData[i][2]],
      borderWidth: 2,
      borderColor: bestFollowedHabitsData[i][1],
      backgroundColor: bestFollowedHabitsData[i][1] + "aa",
    };
    datasets.push(dataset);
  }

  const today = +Date().match(/\d{2}/g)[0];

  console.log(datasets);
  console.log(today);
  const XAaxis = {
    max: numberOfDaysInThisMonth | today,
    min: 1,
    ticks: {
      stepSize: 1,
    },
    grid: {
      color: "#ffffff11",
    },
  };
  const YAaxis = {
    grid: {
      color: "#ffffff33",
    },
  };

  const plugins = {
    title: {
      display: true,
      text: "Tracker Best Followed Habits This Month",
    },
    legend: {
      display: true,
      position: "left",
      align: "start",
      labels: {
        boxWidth: 10,
      },
    },
  };

  return {
    type: "bar",
    data: {
      labels: " ",
      datasets: datasets,
    },
    options: {
      indexAxis: "y",
      plugins: plugins,
      scales: {
        x: XAaxis,
        y: YAaxis,
      },
    },
  };
}
