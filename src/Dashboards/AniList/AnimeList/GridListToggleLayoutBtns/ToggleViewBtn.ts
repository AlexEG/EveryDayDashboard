import HTML from "../../../../components/HTML/HTML";
import toggleHighlight from "./toggleHighlight";

export default function ToggleViewBtn(
  iconFileName: string,
  isSelected: boolean
) {
  const styles = isSelected
    ? "drop-shadow-[0_0_10px_rgb(225,29,72,1)] opacity-80"
    : "opacity-50";
  const toggleViewBtn = HTML("button", styles) as HTMLButtonElement;

  const styles2 = "h-4 w-4 invert";
  const icon = HTML("img", styles2, "", "", {
    src: `/src/assets/${iconFileName}.svg`,
  });

  toggleViewBtn.append(icon);

  toggleViewBtn.onclick = () => {
    toggleHighlight(toggleViewBtn);
  };
  return toggleViewBtn;
}
