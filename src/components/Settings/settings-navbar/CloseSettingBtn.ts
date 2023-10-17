import HTML from "../../HTML/HTML";
export default function CloseSettingBtn() {
  const closeBtn = HTML(
    "button",
    "rounded-sm text-white transition-colors hover:bg-gray-200 hover:text-slate-950",
    "settings-close-btn"
  );

  const svg = document.createElement("svg");
  svg.setAttribute("class", "h-5 w-5");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "3");
  svg.setAttribute("stroke", "currentColor");

  const path = document.createElement("path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("d", "M6 18L18 6M6 6l12 12");

  svg.append(path);
  closeBtn.append(svg);

  return closeBtn;
}
