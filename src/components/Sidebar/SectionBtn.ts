import HTML from "../HTML/HTML";
import Home from "../Home/Home";
import GitHub from "../GitHub/GitHub";

export default function SectionBtn(svgName: string, sectionName: string) {
  const styles =
    "group flex h-14 cursor-pointer items-center justify-center transition duration-200 hover:bg-slate-300";

  const div = HTML("div", styles);

  const img = HTML(
    "img",
    "h-6 w-6 invert group-hover:invert-0 opacity-75 group-hover:opacity-100 transition duration-200"
  );
  img.setAttribute("src", `/src/assets/${svgName}.svg`);

  div.append(img);

  div.onclick = () => {
    console.log(sectionName);

    const ROOT = document.querySelector("div#root");
    document.querySelector("main").remove();

    // remove highlight from all
    const btns = div.parentElement.children;
    for (let i = 0; i < btns.length; i++) {
      if (btns[i].classList.contains("bg-slate-200"))
        btns[i].classList.remove("bg-slate-200");
      btns[i].children[0].classList.add("invert");
    }

    // add highlight
    div.classList.add("bg-slate-200");
    div.children[0].classList.remove("invert");

    // change Main Content
    if (sectionName === "home") {
      ROOT.append(Home());
    }
    if (sectionName === "github") {
      ROOT.append(GitHub());
    }
  };

  return div;
}
