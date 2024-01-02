import HTML from "../../../../../components/HTML/HTML";
import HabitColumnComponent from "./HabitColumnComponent";
import HabitTrackerDATA from "../../../HabitTrackerDATA";

export default function HabitsColumnsContainer(
  numberOfDaysInThisMonth: number,
  thisMonthName: string,
  todayNum: number,
  thisYear: number
) {
  const styles = "flex";
  const HabitsColumnsContainer = HTML(
    "div",
    styles,
    "habit-tracker--tracker--habits-checkbox-grid---habits-column-container"
  );
  HabitsColumnsContainer.dataset.month = thisMonthName;
  HabitsColumnsContainer.dataset.year = String(thisYear);
  HabitsColumnsContainer.dataset.editHabitHistory = "false";

  HabitTrackerDATA().then((data) => {
    // console.log(data);

    for (const [fileName, value] of Object.entries(data)) {
      // console.log(fileName, value);
      const habitNum = fileName.match(/\d+(?=_)/)[0];
      const habitName = fileName.match(/(?<=\d+_).*/)[0].replace(/_/g, " ");

      const metadata = value["metadata"];
      const habitData = value["habitData"];

      const thisMonthData =
        habitData[thisYear] && habitData[thisYear][thisMonthName];

      const autoLockAfterTime = metadata.autoLockAfterTime;
      // console.log(habitNum);
      // console.log(habitName);
      // console.log(habitGroupColor);
      // console.log(thisMonthData);
      // console.log(metadata);
      // console.log("autoLockAfterTime", autoLockAfterTime);

      const habitGroupColor = metadata["groupColor"];

      HabitsColumnsContainer.append(
        HabitColumnComponent(
          numberOfDaysInThisMonth,
          todayNum,
          habitNum,
          habitName,
          habitGroupColor,
          thisMonthData,
          autoLockAfterTime
        )
      );
    }
  });
  // });
  return HabitsColumnsContainer;
}
