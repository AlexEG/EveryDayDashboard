import HTML from "../../../components/HTML/HTML";
import EditHabitsContainer from "./EditHabits/EditHabitsContainer";
import HabitGroupColor from "./HabitGroupColor";
import HabitChartColor from "./HabitChartColor";
import HabitTrackerDATA from "../../../Dashboards/Habit Tracker/HabitTrackerDATA";

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
    console.log(data);
    const habitGroupColorArr = [];
    const habitChartColorArr = [];
    const habitNameArr = [];
    const fileNameArr = [];

    for (const [fileName, value] of Object.entries(data)) {
      // console.log(fileName, value);

      const habitNum = fileName.match(/\d+(?=_)/)[0];
      const habitName = fileName.match(/(?<=\d+_).*/)[0].replace(/_/g, " ");

      const metadata = value["metadata"];
      const habitGroupColor = metadata.groupColor;
      const habitChartColor = metadata.chartColor;

      fileNameArr.push(fileName);
      habitNameArr.push(habitName);
      habitGroupColorArr.push(habitGroupColor);
      habitChartColorArr.push(habitChartColor);

      {
        console.log("habitNum: ", habitNum);
        console.log("habitName: ", habitName);
        console.log("habitGroupColor: ", habitGroupColor);
        console.log("habitChartColor: ", habitChartColor);
        console.log("metadata: ", metadata);
      }
    }
    themeWrapper.append(
      HabitGroupColor(fileNameArr, habitNameArr, habitGroupColorArr),
      HabitChartColor(fileNameArr, habitNameArr, habitChartColorArr)
    );
  });

  mainContainer.append(h1, themeWrapper, EditHabitsContainer());
  return mainContainer;
}
