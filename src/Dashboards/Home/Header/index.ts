import HTML from "../../../components/HTML/HTML";
import SelectMonthBtn from "../../../components/Settings/buttons/SelectMonthBtn";

export default function Header() {
  const styles =
    "py-1 px-2 relative border border-emerald-500 flex justify-end";
  const Header = HTML("header", styles);

  function aa() {
    console.log("first");
  }
  Header.append(SelectMonthBtn(aa));
  return Header;
}
