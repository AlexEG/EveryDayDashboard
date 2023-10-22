import HTML from "../HTML/HTML";
import HomeBtn from "./HomeBtn";
import SettingesBtn from "./SettingesBtn";

export default function Sidebar() {
  const styles =
    "absolute w-14 top-[31px] left-0 h-[calc(100%-31px)] bg-slate-950 text-white";
  const aside = HTML("aside", styles);

  aside.append(HomeBtn(), SettingesBtn());
  return aside;
}
