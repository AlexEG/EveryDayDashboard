export default function HonorChartConfig(
  labelsDays: string[],
  honorDataset: string[]
) {
  const HonorDataset = {
    label: "Honor",
    data: honorDataset,
    borderWidth: 1,
    borderColor: "#f9a8d4",
    backgroundColor: "#9f1239",
  };

  return {
    type: "bar",
    data: {
      labels: labelsDays,
      datasets: [HonorDataset],
    },
  };
}
