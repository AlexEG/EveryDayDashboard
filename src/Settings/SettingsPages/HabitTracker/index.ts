import HTML from "../../../components/HTML/HTML";
import EditHabitsContainer from "./EditHabits/EditHabitsContainer";
import HabitGroupColor from "./HabitGroupColor";
import HabitChartColor from "./HabitChartColor";
import CreateNewHabit from "./CreateNewHabit";
import HabitTrackerDATA from "../../../Dashboards/HabitTracker/HabitTrackerDATA";
import AutoLockAfterTime from "./AutoLockAfterTime/AutoLockAfterTime";
import EnableDisableCharts from "./EnableDisableCharts/EnableDisableCharts";

export default function HabitTracker() {
  const styles =
    "w-[calc(100%-15rem)] h-full pt-6 px-4 pb-4 flex flex-col select-none overflow-y-auto";
  const mainContainer = HTML("section", styles, "settings--habit-tracker");
  const h1 = HTML(
    "h1",
    "text-center text-neutral-50 font-bold",
    "",
    "Habit Tracker"
  );

  const themeWrapper = HTML("div", "flex");

  HabitTrackerDATA().then((data) => {
    // console.log(data);
    const habitGroupColorArr = [];
    const habitChartColorArr = [];
    const habitNameArr = [];
    const fileNameArr = [];
    const fileNumArr = [];
    const HabitsAutoLockAfterTimeArr = [];

    for (const [fileName, value] of Object.entries(data)) {
      // console.log(fileName, value);

      const habitNum = fileName.match(/\d+(?=_)/)[0];
      const habitName = fileName.match(/(?<=\d+_).*/)[0].replace(/_/g, " ");

      const metadata = value["metadata"];
      const habitGroupColor = metadata.groupColor;
      const habitChartColor = metadata.chartColor;
      const habitAutoLockAfterTime = metadata.autoLockAfterTime;

      fileNumArr.push(+habitNum);
      fileNameArr.push(fileName);
      habitNameArr.push(habitName);
      habitGroupColorArr.push(habitGroupColor);
      habitChartColorArr.push(habitChartColor);
      HabitsAutoLockAfterTimeArr.push(habitAutoLockAfterTime);

      // {
      //   console.log("habitNum: ", habitNum);
      //   console.log("habitName: ", habitName);
      //   console.log("habitGroupColor: ", habitGroupColor);
      //   console.log("habitChartColor: ", habitChartColor);
      //   console.log("metadata: ", metadata);
      // console.log("habitAutoLockAfterTime: ", habitAutoLockAfterTime);
      // }
    }

    // console.log("habitNameArr: ", habitNameArr);
    // console.log("fileNameArr: ", fileNameArr);
    // console.log("fileNumArr: ", fileNumArr);

    themeWrapper.append(
      HabitGroupColor(fileNameArr, habitNameArr, habitGroupColorArr),
      HabitChartColor(fileNameArr, habitNameArr, habitChartColorArr)
    );

    mainContainer.append(
      h1,
      EnableDisableCharts(),
      AutoLockAfterTime(fileNameArr, habitNameArr, HabitsAutoLockAfterTimeArr),
      themeWrapper,
      CreateNewHabit(),
      EditHabitsContainer(fileNameArr, fileNumArr)
    );
  });

  return mainContainer;
}
