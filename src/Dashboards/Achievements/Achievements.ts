import HTML from "../../components/HTML/HTML";
import Card from "./Card/Card";
import Header from "./Header/Header";

export default function Achievements() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-black border-t border-l border-neutral-400 p-4 overflow-y-auto";

  const MainContainer = HTML("main", styles, "achievements");
  const h1 = HTML(
    "h1",
    "text-center text-neutral-50 font-bold",
    "",
    "Achievements"
  );

  MainContainer.append(h1, Header(), Card());
  return MainContainer;
}
