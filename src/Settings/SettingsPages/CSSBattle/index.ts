import HTML from "../../../components/HTML/HTML";

export default function CSSBattle() {
  const styles = "bg-emerald-500/50 w-[calc(100%-15rem)] h-full";
  const mainContainer = HTML("section", styles, "settings--css-battle");
  const h1 = HTML(
    "h1",
    "text-center text-neutral-50 font-bold",
    "",
    "CSSBattle"
  );

  mainContainer.append(h1);
  return mainContainer;
}
