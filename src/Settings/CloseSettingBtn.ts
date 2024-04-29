import HTML from "../components/HTML/HTML";
import { closeSettings } from "./SettingsPages/helper";

export default function CloseBtn() {
  const styles =
    "group rounded-sm p-1 transition-colors hover:bg-gray-200 absolute top-1 right-1 z-50";
  const closeBtn = HTML("button", styles);

  const styles2 = "w-5 h-5 invert group-hover:invert-0";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "800px");
  svg.setAttribute("height", "800px");
  svg.setAttribute("viewBox", "0 0 1024 1024");
  svg.setAttribute("class", styles2);

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill", "#000000");

  path.setAttribute(
    "d",
    "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z",
  );
  svg.append(path);

  closeBtn.append(svg);

  closeBtn.onclick = closeSettings;

  return closeBtn;
}
