import HTML from "../HTML/HTML";
import SectionBtn from "./SectionBtn";
import SettingesBtn from "./SettingesBtn";

export default function Sidebar() {
  const styles =
    "absolute w-14 top-[31px] left-0 h-[calc(100%-31px)] bg-slate-950 text-white";
  const aside = HTML("aside", styles);

  aside.append(
    SectionBtn("home", "home"),
    SectionBtn("github", "github"),
    // SectionBtn("codewars"),
    // SectionBtn("wakatime"),
    // SectionBtn("youtube"),

    SettingesBtn()
  );

  aside.children[0].classList.add("bg-slate-200");
  aside.children[0].children[0].classList.remove("invert");
  return aside;
}
