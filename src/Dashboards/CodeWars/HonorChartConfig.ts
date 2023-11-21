export default function HonorChartConfig(
  labelsDays: string[],
  honorDataset: string[]
) {
  return {
    type: "bar",
    data: {
      labels: labelsDays,
      datasets: [
        {
          label: "Honor",
          data: honorDataset,
        },
      ],
    },
  };
}
