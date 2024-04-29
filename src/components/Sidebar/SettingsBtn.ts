import HTML from "../HTML/HTML";
import { openSettingsAnimation } from "./settingsAnimation";

export default function SettingsBtn() {
  const styles =
    "group flex h-14 cursor-pointer items-center justify-center transition duration-200 hover:bg-white/80 select-none";
  const div = HTML("div", styles, "settings-open-btn");

  const styles2 =
    "h-6 w-6 invert group-hover:invert-0 opacity-70 group-hover:opacity-100 transition duration-200";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.6");
  svg.setAttribute("stroke", "#000000");
  svg.setAttribute("class", styles2);

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute(
    "d",
    "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z",
  );
  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("stroke-linecap", "round");
  path2.setAttribute("stroke-linejoin", "round");
  path2.setAttribute("d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z");

  svg.append(path, path2);

  div.append(svg);

  div.dataset.isSettingsOpen = "false";

  div.onclick = () => {
    if (div.dataset.isSettingsOpen === "false") {
      /* Highlight */
      // remove highlight from all
      const btns = div.parentElement.firstElementChild.children;
      for (let i = 0; i < btns.length; i++) {
        if (btns[i].classList.contains("bg-white/90"))
          btns[i].firstElementChild.classList.replace(
            "opacity-100",
            "opacity-70",
          );

        btns[i].classList.remove("bg-white/90");
        btns[i].classList.add("hover:bg-white/80");
        btns[i].firstElementChild.classList.add("invert");
      }
      // add highlight
      svg.classList.replace("opacity-70", "opacity-100");
      div.classList.add("bg-white/90");
      div.classList.remove("hover:bg-white/80");
      div.firstElementChild.classList.remove("invert");

      /* Open Settings box */
      openSettingsAnimation();
      div.dataset.isSettingsOpen = "true";
    }
  };

  return div;
}
