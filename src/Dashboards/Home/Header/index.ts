import HTML from "../../../components/HTML/HTML";
import SelectMonthBtn from "../../../components/Settings/buttons/SelectMonthBtn";

export default function Header() {
  const styles = "py-1 px-2 relative flex justify-end";
  const Header = HTML("header", styles);
  const p = HTML(
    "p",
    "text-emerald-500 text-sm font-medium self-center mr-auto",
    "",
    "Check after the task is finished  (Don't do in order, Do when you feel like it)"
  );
  function aa() {
    console.log("first");
  }
  Header.append(p, SelectMonthBtn(aa));
  return Header;
}
