import HTML from "../../../components/HTML/HTML";
import ChangeMonthInPreview from "./ChangeMonthInPreview";

export default function Header() {
  const styles = "bg-pink-500 h-10 relative";
  const Header = HTML("header", styles);
  Header.append(ChangeMonthInPreview());
  return Header;
}
