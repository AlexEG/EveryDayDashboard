export default function HonorScoreChartConfig(
  labelsDays: string[],
  honorDataset: string[],
  scoreDataset: string[]
) {
  const HonorDataset = {
    label: "Honor",
    data: honorDataset,
    borderWidth: 0,
    borderColor: "#fb7185",
    backgroundColor: "#9f1239",
  };
  const ScoreDataset = {
    label: "Score",
    data: scoreDataset,
    borderWidth: 0,
    borderColor: "#60a5fa",
    backgroundColor: "#1e40af",
  };

  return {
    type: "bar",
    data: {
      labels: labelsDays,
      datasets: [HonorDataset, ScoreDataset],
    },
  };
}
