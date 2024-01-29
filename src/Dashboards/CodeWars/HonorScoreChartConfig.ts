export default function HonorScoreChartConfig(
  labelsDays: string[],
  honorDataset: number[],
  LanguagesNames: string[],
  LanguagesScoreBigArray: any,
) {
  // console.log(honorDataset);

  const HonorDataset = {
    label: "Honor",
    data: honorDataset,
    backgroundColor: "#6b21a8",
    stack: "Stack 0",
  };

  const colors = [
    "#eab308",
    "#0ea5e9",
    "#be123c",
    "#9333ea",
    "#4f46e5",
    "#1d4ed8",
    "#16a34a",
  ];

  const languageDatasetsArr = [];
  for (let i = 0; i < LanguagesNames.length; i++) {
    const Dataset = {
      label: LanguagesNames[i],
      data: LanguagesScoreBigArray[i],
      backgroundColor: colors[i],
      stack: "Stack 1",
    };
    // console.log(LanguagesScoreBigArray[i]);
    languageDatasetsArr.push(Dataset);
  }

  // console.log(languageDatasetsArr);

  const XAaxis = {
    grid: {
      stacked: true,
      color: "#ffffff11",
    },
  };
  const YAaxis = {
    stacked: true,
    grid: {
      color: "#ffffff33",
    },
  };

  return {
    type: "bar",
    data: {
      labels: labelsDays,
      datasets: [HonorDataset, ...languageDatasetsArr],
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
      },
      scales: {
        x: XAaxis,
        y: YAaxis,
      },
    },
  };
}
