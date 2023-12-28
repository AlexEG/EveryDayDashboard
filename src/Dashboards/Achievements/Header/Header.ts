import HTML from "../../../components/HTML/HTML";

export default function Header() {
  const styles = "h-60 border border-rose-600 mb-12";
  const headerContainer = HTML("header", styles);
  return headerContainer;
}
