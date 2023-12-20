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
    (data: {
      data: {
        isHabitListDisplayedByDefault: boolean;
        charts: {
          isTrackerTimeChartDisplayed: boolean;
          isTrackerBestFollowedDayChartDisplayed: boolean;
          isTrackerBestFollowedMonthChartDisplayed: boolean;
          isTrackerBestFollowedHabitsChartDisplayed: boolean;
        };
      };
    }) => {
      // console.log("HabitTrackerSettingsDATA", data);
      const isHabitListDisplayedByDefault =
        data.data.isHabitListDisplayedByDefault;

      const isTimeChart = data.data.charts.isTrackerTimeChartDisplayed;
      const isBestFollowedDayChart =
        data.data.charts.isTrackerBestFollowedDayChartDisplayed;
      const isBestFollowedMonthChar =
        data.data.charts.isTrackerBestFollowedMonthChartDisplayed;
      const isBestFollowedHabitsChart =
        data.data.charts.isTrackerBestFollowedHabitsChartDisplayed;

      MainContainer.append(
        Header(isHabitListDisplayedByDefault),
        Tracker(isHabitListDisplayedByDefault),
        isTimeChart ? TrackerTimeChart() : "",
        isBestFollowedDayChart ? TrackerBestFollowedDayChart() : "",
        isBestFollowedMonthChar ? TrackerBestFollowedMonthChart() : "",
        isBestFollowedHabitsChart ? TrackerBestFollowedHabitsChart() : ""
      );
    }
  );
  return MainContainer;
}
