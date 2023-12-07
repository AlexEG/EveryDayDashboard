export default function TrackerTimeChartConfig(
  labelsDays: string[],
  habitsChartColor: string[],
  AllHabitsNames: string[],
  AllHabitsTimeDataset: number[]
) {
  // console.log(honorDataset, scoreDataset);

  const datasets: any = [];

  // console.log(AllHabitsNames);
  // console.log(AllHabitsTimeDataset);

  for (let i = 0; i < AllHabitsNames.length; i++) {
    // console.log(AllHabitsNames[i]);
    const dataset = {
      label: AllHabitsNames[i] + " ",
      data: AllHabitsTimeDataset[i],
      borderWidth: 2,
      borderColor: habitsChartColor[i],
      backgroundColor: habitsChartColor[i] + "aa",
      pointHoverRadius: 7,
    };
    datasets.push(dataset);
  }

  const XAaxis = {
    grid: {
      color: "#ffffff11",
    },
  };
  const YAaxis = {
    max: 24,
    beginAtZero: true,
    ticks: {
      callback: (value: number) =>
        value > 12 ? `${value - 12} pm` : `${value} am`,
      stepSize: 2,
      color: "rgb(238 242 255 / 80)",
    },
    grid: {
      color: "#ffffff33",
    },
  };

  const plugins = {
    title: {
      display: true,
      text: "Tracker Time Chart",
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
    type: "line",
    data: {
      labels: labelsDays,
      datasets: datasets,
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
