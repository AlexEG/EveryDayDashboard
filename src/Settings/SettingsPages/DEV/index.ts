import HTML from "../../../components/HTML/HTML";

export default function DEV() {
  const styles = "bg-rose-500/50 w-[calc(100%-15rem)] h-full";
  const mainContainer = HTML("section", styles, "settings--dev");
  const h1 = HTML("h1", "text-center text-neutral-50 font-bold", "", "DEV");

  mainContainer.append(h1);
  return mainContainer;
}
