import HTML from "../components/HTML/HTML";
import { closeSettings } from "./SettingsPages/helper";

export default function CloseBtn() {
  const styles =
    "group rounded-sm p-1 transition-colors hover:bg-gray-200 absolute top-1 right-1 z-50";
  const closeBtn = HTML("button", styles);

  const styles2 = "w-5 h-5 invert group-hover:invert-0";
  const img = HTML("img", styles2, "", "", { src: "/src/assets/x-mark.svg" });
  closeBtn.append(img);

  closeBtn.onclick = closeSettings;

  return closeBtn;
}
