import SettingsFieldset from "../../../../components/Settings/SettingsFieldset";
import ToggleBtn from "../../../../components/Settings/buttons/ToggleBtn";
import HTML from "../../../../components/HTML/HTML";
import HabitTrackerSettingsDATA from "../../../../Dashboards/HabitTracker/HabitTrackerSettingsDATA";

export default function EnableDisableCharts() {
  const container = SettingsFieldset(
    "Enable Disable Charts",
    "settings--habit-tracker--enable-disable-charts",
  );

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
      // console.log(data);

      const charts = data.data.charts;
      // console.log("charts", charts);

      for (const [chartName, isDisplayed] of Object.entries(charts)) {
        const chart = HTML("div", "w-1/2 my-2");

        chart.append(
          ToggleBtn(
            chartName.match(/(?<=isTracker).*(?=Displayed)/),
            ``,
            isDisplayed,
            () => enableDisableChartJSON(chartName),
          ),
        );
        container.append(chart);
      }
    },
  );

  function enableDisableChartJSON(chartPropertyName: string) {
    window.DATA.editSettingsJSONFile_ON_OFF(
      "settings/habit-tracker",
      "data",
      "charts",
      chartPropertyName,
    );
  }

  return container;
}
