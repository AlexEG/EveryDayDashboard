import HTML from "../../../../components/HTML/HTML";
import toggleHighlight from "./toggleHighlight";

export default function ToggleViewBtn(
  iconFileName: string,
  isSelected: boolean,
  isSelectedStyles: string,
) {
  const styles = isSelected
    ? `opacity-80 ${isSelectedStyles || "drop-shadow-[0_0_10px_#ffffff]"}`
    : "opacity-50";
  const toggleViewBtn = HTML("button", styles) as HTMLButtonElement;

  const styles2 = "h-4 w-4 invert ";
  const icon = HTML("img", styles2, "", "", {
    src: `/src/assets/${iconFileName}.svg`,
  });

  toggleViewBtn.append(icon);

  toggleViewBtn.onclick = () => {
    toggleHighlight(toggleViewBtn);
  };
  return toggleViewBtn;
}
