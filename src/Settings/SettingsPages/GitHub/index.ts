import HTML from "../../../components/HTML/HTML";

export default function GitHub() {
  const styles = "bg-green-500/50 w-[calc(100%-15rem)] h-full";
  const mainContainer = HTML("section", styles, "settings--github");
  const h1 = HTML("h1", "text-center text-neutral-50 font-bold", "", "GitHub");

  mainContainer.append(h1);
  return mainContainer;
}
