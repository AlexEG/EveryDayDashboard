import HTML from "../../components/HTML/HTML";
import Tracker from "./Tracker";
import TrackerTimeChart from "./TrackerTimeChart";
import Header from "./Header";
import TrackerBestFollowedHabitsChart from "./TrackerBestFollowedHabitsChart";
import TrackerBestFollowedDayChart from "./TrackerBestFollowedDayChart";
import TrackerBestFollowedMonthChart from "./TrackerBestFollowedMonthChart";
import HabitTrackerSettingsDATA from "./HabitTrackerSettingsDATA";

export default function HabitTracker() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 p-4 overflow-y-auto";

  const MainContainer = HTML("main", styles, "habit-tracker");

  HabitTrackerSettingsDATA().then(
    (data: { data: { isHabitListDisplayedByDefault: boolean } }) => {
      // console.log("HabitTrackerSettingsDATA", data);
      const isHabitListDisplayedByDefault =
        data.data.isHabitListDisplayedByDefault;

      MainContainer.append(
        Header(isHabitListDisplayedByDefault),
        Tracker(isHabitListDisplayedByDefault),
        TrackerTimeChart(),
        TrackerBestFollowedDayChart(),
        TrackerBestFollowedMonthChart(),
        TrackerBestFollowedHabitsChart()
      );
    }
  );
  return MainContainer;
}
