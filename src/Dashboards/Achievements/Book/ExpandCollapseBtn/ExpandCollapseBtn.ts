import HTML from "../../../../components/HTML/HTML";
import toggleExpandCollapseHighlight from "./toggleExpandCollapseHighlight";
import toggleSubCards from "./toggleSubCards";

export default function ExpandCollapseBtn() {
  const styles = "w-full h-full";
  const expandCollapseBtn = HTML("div", styles);

  const styles2 =
    "border w-12 h-12 grid place-content-center group-odd:border-rose-600 group-even:border-blue-600 group-odd:hover:border-rose-300 group-even:hover:border-blue-300 group-odd:hover:bg-rose-300 group-even:hover:bg-blue-300";
  const expandBtn = HTML("button", styles2);
  const img2 = HTML("img", "invert w-6 h-6", "", "", {
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
