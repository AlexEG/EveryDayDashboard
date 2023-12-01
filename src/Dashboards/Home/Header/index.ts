import HTML from "../../../components/HTML/HTML";
import SelectMonthBtn from "../../../components/Settings/buttons/SelectMonthBtn";
import HabitsTable from "../habits-table/HabitsTable";
import TimeChart from "../TimeChart";

export default function Header() {
  const styles = "py-1 px-2 relative flex justify-end";
  const Header = HTML("header", styles);
  const p = HTML(
    "p",
    "text-emerald-500 text-sm font-medium self-center mr-auto",
    "",
    "Check after the task is finished  (Don't do in order, Do when you feel like it)"
  );

  function ViewOtherMonth(select: HTMLSelectElement) {
    const PREF_LOG_START = Date.now();
    // ---------
    const SELECTED_YEAR = 2023;
    const [selectedMonthName, selectedNum] = select.value.split("-");

    // delete the old table
    document
      .querySelector("#home--habits-table-list-wrapper #habits-table")
      .remove();
    // apped new table with the seleted year & month
    document
      .querySelector("#home--habits-table-list-wrapper")
      .append(HabitsTable(SELECTED_YEAR, +selectedNum));
    // console.log(selectedMonthName, selectedNum);

    // Time Chart

    // delete the chart
    document.querySelector("#home--habits-time-chart").remove();
    document
      .querySelector("#home")
      .append(TimeChart(SELECTED_YEAR, +selectedNum));

    const LOG_CSS = [
      "background:#000; color:#fff",
      "background:#000; color:#f9f",
      "background:#000; color:#0f0; font-weight:900",
    ];
    console.log(
      `%c Home / Table & Chart %c<Change View>  %c${SELECTED_YEAR} ${selectedMonthName} `,
      ...LOG_CSS
    );
    // ---------
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

  Header.append(p, SelectMonthBtn(ViewOtherMonth));
  return Header;
}
