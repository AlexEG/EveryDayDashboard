import HTML from "../../components/HTML/HTML";
import toggleHighlightAndSections from "./toggleHighlightAndSections";

export default function NavBtn(
  sectionName: string,
  sectionHTML: any,
  isOpendByDefault: boolean,
) {
  const styles = `hover:bg-neutral-600 text-neutral-100 w-full text-left pl-2 py-0.5 my-0.5 text-sm ${isOpendByDefault ? "bg-neutral-600" : ""}`;
  const btn = HTML("button", styles, "", sectionName);

  btn.onclick = () => toggleHighlightAndSections(sectionName, btn, sectionHTML);

  return btn;
}
