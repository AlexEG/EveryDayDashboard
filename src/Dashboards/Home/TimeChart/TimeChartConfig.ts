export default function TimeChartConfig(
  labelsDays: string[],
  AllHabitsNames: string[],
  AllHabitsTimeDataset: number[]
) {
  // console.log(honorDataset, scoreDataset);
  const colors = [
    "#f43f5e",
    "#eab308",
    "#7dd3fc",
    "#60a5fa",
    "#4f46e5",
    "#4338ca",
    "#14b8a6",
    "#0284c7",
    "#dc2626",
    "#16a34a",
    "#1e3a8a",
    "#f9a8d4",
    "#ea580c",
    "#ec4899",
    "#4d7c0f",
    "#d97706",
    "#713f12",
    "#6d28d9",
    "#2e1065",
    "#f97316",
    "#ca8a04",
    "#86efac",
    "#1d4ed8",
    "#3f6212",
    "#4a044e",
    "#65a30d",
    "#0891b2",
    "#10b981",
    "#4c0519",
  ];
  const datasets: any = [];

  // console.log(AllHabitsNames);
  // console.log(AllHabitsTimeDataset);

  for (let i = 0; i < AllHabitsNames.length; i++) {
    // console.log(AllHabitsNames[i]);
    const dataset = {
      label: AllHabitsNames[i],
      data: AllHabitsTimeDataset[i],
      borderWidth: 2,
      borderColor: colors[i],
      backgroundColor: colors[i],
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
      stepSize: 2,
    },
    grid: {
      color: "#ffffff33",
    },
  };

  const plugins = {
    title: {
      display: true,
      text: "Visually time of compelling habits",
    },
    legend: {
      display: true,
      position: "top",
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
