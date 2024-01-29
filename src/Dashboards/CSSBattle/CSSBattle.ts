import HTML from "../../components/HTML/HTML";

export default function CSSBattle() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 p-4";

  const MainContainer = HTML("main", styles, "cssbattle");

  const h1 = HTML(
    "h1",
    "text-center text-neutral-50 font-bold",
    "",
    "CSSBattle",
  );

  MainContainer.append(h1);
  return MainContainer;
}
