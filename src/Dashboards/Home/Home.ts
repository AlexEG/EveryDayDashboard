import HTML from "../../components/HTML/HTML";

export default function Home() {
  const styles =
    "home-section h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 overflow-y-auto";
  const MainContainer = HTML("main", styles, "home");

  const h1 = HTML("h1", "text-center text-neutral-50 font-bold", "", "Home");

  MainContainer.append(h1);
  return MainContainer;
}
