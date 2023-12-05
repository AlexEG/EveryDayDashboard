import HTML from "../../../../../components/HTML/HTML";
import HabitColumnComponent from "./HabitColumnComponent";
// import AllHabitsDATA from "../../../../Home/habits-table/AllHabitsDATA";
import SettingsHomeDATA from "../../../../Home/SettingsHomeDATA";
import HabitTrackerDATA from "../../../HabitTrackerDATA";

export default function HabitsColumnsContainer(
  numberOfDaysInThisMonth: number,
  thisMonthName: string,
  todayNum: number,
  thisYear: number
) {
  const styles = "flex";
  const HabitsColumnsContainer = HTML("div", styles);
  HabitsColumnsContainer.dataset.month = "December";
  HabitsColumnsContainer.dataset.year = "2023";

  HabitTrackerDATA().then((data) => {
    console.log(data);
  });

  SettingsHomeDATA().then((data) => {
    const habitsColor = data["habitsColor"];
    // console.log(habitsColor);

    HabitTrackerDATA().then((data) => {
      // console.log(data);

      for (const [fileName, value] of Object.entries(data)) {
        // console.log(fileName, value);
        const habitNum = fileName.match(/\d+(?=_)/)[0];
        const habitName = fileName.match(/(?<=\d+_).*/)[0].replace(/_/g, " ");
        const habitGroupColor = habitsColor[habitName];

        const metadata = value["metadata"];
        const habitData = value["habitData"];

        const thisMonthData = habitData[thisYear][thisMonthName];
        // console.log(habitNum);
        // console.log(habitName);
        // console.log(habitGroupColor);
        // console.log(thisMonthData);

        HabitsColumnsContainer.append(
          HabitColumnComponent(
            numberOfDaysInThisMonth,
            todayNum,
            habitNum,
            habitName,
            habitGroupColor,
            thisMonthData
          )
        );
      }
    });
  });
  return HabitsColumnsContainer;
}
