import HTML from "../../../components/HTML/HTML";
import SelectMonthBtn from "../../../components/Settings/buttons/SelectMonthBtn";
import SelectYearBtn from "../../..//components/Settings/buttons/SelectYearBtn";
import ViewOtherMonth from "./ViewOtherMonth";

export default function Header() {
  const styles = "py-1 px-2 relative flex justify-end gap-2";
  const Header = HTML("header", styles);
  const p = HTML(
    "p",
    "text-emerald-500 text-sm font-medium self-center mr-auto",
    "",
    "Check after the task is finished  (Don't do in order, Do when you feel like it)"
  );

  Header.append(
    p,
    SelectMonthBtn(ViewOtherMonth),
    SelectYearBtn(ViewOtherMonth)
  );
  return Header;
}
