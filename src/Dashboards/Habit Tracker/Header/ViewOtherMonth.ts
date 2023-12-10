import HabitsCheckboxGrid from "../Tracker/HabitsCheckboxGrid";
import TrackerTimeChart from "../TrackerTimeChart";
import TrackerBestFollowedHabitsChart from "../TrackerBestFollowedHabitsChart";

export default function ViewOtherMonth(select: HTMLSelectElement) {
  const PREF_LOG_START = Date.now();
  // ---------
  const SELECTED_YEAR =
    select.childElementCount === 12
      ? Number(select.dataset.year)
      : +select.value;

  // if you change selectYearBtn it take the month value from
  const [selectedMonthName, selectedNum] =
    select.childElementCount === 12
      ? select.value.split("-")
      : select.dataset.month.split("-");

  console.log("SELECTED_YEAR", SELECTED_YEAR);
  console.log("selectedMonthName", selectedMonthName);
  console.log("selectedNum", selectedNum);

  // Tracker
  {
    // delete the old table
    const checkboxGrid = document.querySelector(
      "#habit-tracker > #habit-tracker--tracker > #habits-checkbox-grid"
    );

    if (checkboxGrid) checkboxGrid.remove();

    // apped new table with the seleted year & month
    const trackerContainer = document.querySelector("#habit-tracker--tracker");

    if (trackerContainer) {
      trackerContainer.append(HabitsCheckboxGrid(SELECTED_YEAR, +selectedNum));
    }
  }

  // Charts
  {
    // delete the charts
    const chart1 = document.querySelector("#habit-tracker--tracker-time-chart");
    const chart2 = document.querySelector(
      "#habit-tracker--tracker-best-followed-habits-chart"
    );
    if (chart1) chart1.remove();
    if (chart2) chart2.remove();

    // Append the new charts
    const mainContainer = document.querySelector("#habit-tracker");

    if (mainContainer) {
      mainContainer.append(TrackerTimeChart(SELECTED_YEAR, +selectedNum));
      mainContainer.append(
        TrackerBestFollowedHabitsChart(SELECTED_YEAR, +selectedNum)
      );
    }
  }

  // ---- edit select btns Year && Month
  if (select.childElementCount === 12) {
    const selectYearBtn = select?.nextElementSibling as HTMLSelectElement;
    if (selectYearBtn) selectYearBtn.dataset.month = select.value;
    // console.log(selectYearBtn);
  } else {
    const selectMonthBtn = select?.previousElementSibling as HTMLSelectElement;
    if (selectMonthBtn) selectMonthBtn.dataset.year = select.value;
    // console.log(selectMonthBtn);
  }

  // ---------
  {
    const LOG_CSS = [
      "background:#000; color:#fff",
      "background:#000; color:#f9f",
      "background:#000; color:#0f0; font-weight:900",
    ];
    console.log(
      `%c Home / Table & Chart %c<Change View>  %c${SELECTED_YEAR} ${selectedMonthName} `,
      ...LOG_CSS
    );
  }
  // ---------

  {
    const PREF_LOG_END = Date.now();
    const PREF_LOG_CSS = [
      "background:#000; color:#fff",
      "background:#000; color:#0f0",
    ];
    console.log(
      `%c Preformance / Time  %c${PREF_LOG_END - PREF_LOG_START}ms`,
      ...PREF_LOG_CSS
    );
  }
}
