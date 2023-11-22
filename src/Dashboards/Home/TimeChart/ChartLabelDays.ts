export default function ChartLabelDays() {
  const date = new Date();

  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const thisYear = date.getFullYear();
  const thisMonthNum = date.getMonth();

  const SELECTED_MONTH = MONTHS[thisMonthNum];

  const numberOfDaysInThisMonth = new Date(thisYear, thisMonthNum, 0).getDate();

  const labelsDays: string[] = [];

  // for 30 Days view
  for (let i = 0; i < numberOfDaysInThisMonth; i++) {
    // X axis Labels
    const dayOfWeek = new Date(`${SELECTED_MONTH} ${i + 1}, ${thisYear}`)
      .toString()
      .slice(0, 4);

    const day = dayOfWeek + (i + 1);
    labelsDays.push(day);
  }

  return labelsDays;
}
