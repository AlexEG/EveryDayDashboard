import AllHabitsDATA from "../habits-table/AllHabitsDATA";

export default function HabitsTimeDatasets() {
  const SELECTED_MONTH = "November";

  const DATA: {
    habitsNames: string[];
    habitsTimeDatasets: number[];
  } = { habitsNames: [], habitsTimeDatasets: [] };

  AllHabitsDATA().then((data) => {
    // ------------
    const AllHabitsNames = Array.from(Object.keys(data), (name) =>
      name.split("_").slice(2).join(" ")
    );
    DATA.habitsNames = AllHabitsNames;
    // console.log(AllHabitsNames);

    // ------------

    const AllHabitsTimeDataset = [];

    for (const habit in data) {
      const habitMonth = [];
      for (const day in data[habit][SELECTED_MONTH]) {
        const time = data[habit][SELECTED_MONTH][day][1];
        if (Array.isArray(time)) {
          habitMonth.push(+time[4].split(":").slice(0, 2).join("."));
        } else {
          habitMonth.push(null);
        }
        // console.log(data[habit][SELECTED_MONTH]);
      }
      AllHabitsTimeDataset.push(habitMonth);
    }

    DATA.habitsTimeDatasets = AllHabitsTimeDataset;
    // console.log(AllHabitsTimeDataset);
  });
  // console.log(DATA);
  return DATA;
}
