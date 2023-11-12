import HTML from "../../../components/HTML/HTML";

export default function Home() {
  const styles = "bg-blue-500/50 w-[calc(100%-15rem)] h-full";
  const mainContainer = HTML("section", styles, "settings--home");
  const h1 = HTML("h1", "text-center text-neutral-50 font-bold", "", "Home");

  mainContainer.append(h1);
  return mainContainer;
}
