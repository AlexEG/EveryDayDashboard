import HTML from "../HTML/HTML";
import { openSettingsAnimation } from "./settingsAnimation";

export default function SettingsBtn() {
  const styles =
    "group flex h-14 cursor-pointer items-center justify-center transition duration-200 hover:bg-white/80 select-none";
  const div = HTML("div", styles, "settings-open-btn");

  const styles2 =
    "h-6 w-6 invert group-hover:invert-0 opacity-70 group-hover:opacity-100 transition duration-200";

  const img = HTML("img", styles2, "", "", { src: "/src/assets/settings.svg" });
  div.append(img);

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
            "opacity-70"
          );

        btns[i].classList.remove("bg-white/90");
        btns[i].classList.add("hover:bg-white/80");
        btns[i].firstElementChild.classList.add("invert");
      }
      // add highlight
      img.classList.replace("opacity-70", "opacity-100");
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
