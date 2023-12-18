import HTML from "../../../components/HTML/HTML";
import SelectMonthBtn from "../../../components/Settings/buttons/SelectMonthBtn";
import SelectYearBtn from "../../../components/Settings/buttons/SelectYearBtn";
import ViewOtherMonth from "./ViewOtherMonth";
import ToggleBtn from "../../../components/Settings/buttons/ToggleBtn";
import toggleUnlockEditHistory from "./toggleUnlockEditHistory";
import toggleHabitList from "./toggleHabitList";

export default function Header() {
  const styles = "py-1 px-2 relative flex justify-end gap-2";
  const Header = HTML("header", styles);
  const p = HTML(
    "p",
    "text-emerald-500 text-xs font-medium self-center mr-auto",
    "",
    "Check after the task is finished  (Don't do in order, Do when you feel like it)"
  );

  Header.append(
    p,
    ToggleBtn(
      "Unlock Edit History",
      "toggle-unlock-edit-history-btn",
      false,
      toggleUnlockEditHistory
    ),
    ToggleBtn("Habit List", "toggle-habit-list-btn", true, toggleHabitList),
    SelectMonthBtn(ViewOtherMonth),
    SelectYearBtn(ViewOtherMonth)
  );
  return Header;
}
