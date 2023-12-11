import HTML from "../../../components/HTML/HTML";
import SelectMonthBtn from "../../../components/Settings/buttons/SelectMonthBtn";
import SelectYearBtn from "../../../components/Settings/buttons/SelectYearBtn";
import ViewOtherMonth from "./ViewOtherMonth";
import ToggleBtn from "../../../components/Settings/buttons/ToggleBtn";

export default function Header() {
  const styles = "py-1 px-2 relative flex justify-end gap-2";
  const Header = HTML("header", styles);
  const p = HTML(
    "p",
    "text-emerald-500 text-xs font-medium self-center mr-auto",
    "",
    "Check after the task is finished  (Don't do in order, Do when you feel like it)"
  );

  function ToggleHabitList() {
    const habitsNameList = document.querySelector(
      "#habit-tracker--tracker--habit-list"
    );

    if (habitsNameList.classList.contains("hidden")) {
      habitsNameList.classList.remove("hidden");

      console.log(
        "%c HabitTracker /%c OPEN %c HabitList ",
        "background:black; color:#fff;",
        "background:black; color:#0f0;font-weight: 900;",
        "background:black; color:#fff;"
      );
    } else {
      habitsNameList.classList.add("hidden");

      console.log(
        "%c HabitTracker /%c CLOSE %c HabitList ",
        "background:black; color:#fff;",
        "background:black; color:#f00;font-weight: 900;",
        "background:black; color:#fff;"
      );
    }
  }

  Header.append(
    p,
    ToggleBtn("Habit List", "", true, ToggleHabitList),
    SelectMonthBtn(ViewOtherMonth),
    SelectYearBtn(ViewOtherMonth)
  );
  return Header;
}
