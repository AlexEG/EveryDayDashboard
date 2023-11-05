import HTML from "../HTML/HTML";

export default function SectionBtn(sectionName: string, sectionHTML: any) {
  const styles =
    "group flex h-14 cursor-pointer items-center justify-center transition duration-200 hover:bg-slate-300";
  const div = HTML("div", styles, "", "", { title: sectionName });

  const styles2 =
    "h-6 w-6 invert group-hover:invert-0 opacity-75 group-hover:opacity-100 transition duration-200";
  const img = HTML("img", styles2, "", "", {
    src: `/src/assets/${sectionName}.svg`,
  });

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

    ROOT.append(sectionHTML());
  };

  return div;
}
