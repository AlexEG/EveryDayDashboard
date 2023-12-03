import HTML from "../../../../../components/HTML/HTML";
import HabitColumnComponent from "./HabitColumnComponent";
import AllHabitsDATA from "../../../../Home/habits-table/AllHabitsDATA";
import SettingsHomeDATA from "../../../../Home/SettingsHomeDATA";

export default function HabitsColumnsContainer(
  numberOfDaysInThisMonth: number,
  todayNum: number,
  thisMonthName: string
) {
  const styles = "flex";
  const HabitsColumnsContainer = HTML("div", styles);
  HabitsColumnsContainer.dataset.month = "December";

  SettingsHomeDATA().then((data) => {
    const habitsColor = data["habitsColor"];
    // console.log(habitsColor);

    AllHabitsDATA().then((data) => {
      // console.log(data);

      for (const [fileName, value] of Object.entries(data)) {
        // console.log(fileName, value);
        const habitNum = fileName.match(/\d+(?=_)/)[0];
        const habitName = fileName.match(/(?<=\d+_).*/)[0].replace(/_/g, " ");
        const habitGroupColor = habitsColor[habitName];
        const thisMonthData = value[thisMonthName];
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
