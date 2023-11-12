import HTML from "../HTML/HTML";
import { closeSettingsAnimation } from "./settingsAnimation";

export default function SectionBtn(sectionName: string, sectionHTML: any) {
  const styles =
    "group flex h-14 cursor-pointer items-center justify-center transition duration-200 hover:bg-slate-200 select-none";
  const div = HTML("div", styles, "", "", { title: sectionName });

  const styles2 =
    "h-6 w-6 invert group-hover:invert-0 opacity-70 group-hover:opacity-100 transition duration-200";
  const img = HTML("img", styles2, "", "", {
    src: `/src/assets/${sectionName}.svg`,
  });

  div.append(img);

  div.onclick = () => {
    console.log(sectionName);

    img.classList.replace("opacity-70", "opacity-100");

    const ROOT = document.querySelector("div#root");
    document.querySelector("main").remove();

    // remove highlight from all dashboard btns
    const btns = div.parentElement.children;
    for (let i = 0; i < btns.length; i++) {
      if (btns[i].classList.contains("bg-slate-200"))
        btns[i].firstElementChild.classList.replace(
          "opacity-100",
          "opacity-70"
        );

      btns[i].classList.remove("bg-slate-200");
      btns[i].children[0].classList.add("invert");
    }

    // reomve highlight from settings btn
    const settingsBtn = div.parentElement.parentElement
      .lastChild as HTMLDivElement;
    if (settingsBtn.classList.contains("bg-slate-200")) {
      settingsBtn.classList.remove("bg-slate-200");
      settingsBtn.firstElementChild.classList.add("invert");
      settingsBtn.firstElementChild.classList.replace(
        "opacity-100",
        "opacity-70"
      );
    }
    closeSettingsAnimation();

    // add highlight
    div.classList.add("bg-slate-200");
    div.children[0].classList.remove("invert");

    // change Main Content

    ROOT.append(sectionHTML());
  };

  return div;
}
