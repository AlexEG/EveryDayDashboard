import HTML from "../HTML/HTML";
import { closeSettingsAnimation } from "./settingsAnimation";

export default function SectionBtn(sectionName: string, sectionHTML: any) {
  const styles =
    "group flex h-14 cursor-pointer items-center justify-center transition duration-200 hover:bg-white/80 select-none";
  const div = HTML("div", styles, "", "", { title: sectionName });

  const styles2 =
    "h-6 w-6 invert group-hover:invert-0 opacity-70 group-hover:opacity-100 transition duration-200";
  const img = HTML("img", styles2, "", "", {
    src: `/src/assets/${sectionName}.svg`,
  });

  div.append(img);

  div.onclick = () => {
    const PREF_LOG_START = Date.now();
    if (!(document.querySelector("main").getAttribute("id") == sectionName)) {
      console.log(
        ` %c OPEN  ${sectionName} `,
        "background:black; color:#0f0;font-weight: 700;",
      );

      img.classList.replace("opacity-70", "opacity-100");

      const ROOT = document.querySelector("div#root");

      // remove highlight from all dashboard btns
      const btns = div.parentElement.children;
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
      div.classList.add("bg-white/90");
      div.classList.remove("hover:bg-white/80");
      div.firstElementChild.classList.remove("invert");

      // change Main Content
      document.querySelector("main").remove();
      ROOT.append(sectionHTML());
    }

    // to close when click on the same dashboard btn
    //* Settings
    closeSettingsAnimation();
    // reomve highlight from settings btn
    const settingsBtn = div.parentElement.parentElement
      .lastChild as HTMLDivElement;
    if (settingsBtn.classList.contains("bg-white/90")) {
      settingsBtn.classList.remove("bg-white/90");
      settingsBtn.classList.add("hover:bg-white/80");
      settingsBtn.firstElementChild.classList.add("invert");
      settingsBtn.firstElementChild.classList.replace(
        "opacity-100",
        "opacity-70",
      );
      settingsBtn.dataset.isSettingsOpen = "false";
    }

    const PREF_LOG_END = Date.now();
    const PREF_LOG_CSS = [
      "background:#000; color:#fff",
      "background:#000; color:#0f0",
      "background:#000; color:#fff",
    ];
    console.log(
      `%c Preformance / ${sectionName}  { %c${
        PREF_LOG_END - PREF_LOG_START
      }m%c } `,
      ...PREF_LOG_CSS,
    );
  };

  return div;
}
