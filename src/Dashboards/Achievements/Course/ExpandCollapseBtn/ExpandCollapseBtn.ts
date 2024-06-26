import HTML from "../../../../components/HTML/HTML";
import toggleExpandCollapseHighlight from "./toggleExpandCollapseHighlight";
import toggleSubCards from "./toggleSubCards";

export default function ExpandCollapseBtn() {
  const styles = "w-full h-full";
  const expandCollapseBtn = HTML("div", styles);

  const styles2 =
    "group border border-blue-600 w-12 h-12 grid place-content-center hover:border-blue-300 hover:bg-blue-300";
  const expandBtn = HTML("button", styles2);
  const img2 = HTML("img", "invert w-6 h-6 group-hover:invert-0", "", "", {
    src: "/src/assets/chevron-down.svg",
  });
  expandBtn.append(img2);
  expandBtn.dataset.open = "false";
  expandBtn.onclick = () => (
    toggleExpandCollapseHighlight(expandBtn), toggleSubCards(expandBtn)
  );

  expandCollapseBtn.append(expandBtn);
  return expandCollapseBtn;
}
