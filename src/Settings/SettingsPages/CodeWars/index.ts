import HTML from "../../../components/HTML/HTML";

export default function CodeWars() {
  const styles = "bg-lime-500/50 w-[calc(100%-15rem)] h-full";
  const mainContainer = HTML("section", styles, "settings--codeWars");
  const h1 = HTML(
    "h1",
    "text-center text-neutral-50 font-bold",
    "",
    "CodeWars",
  );

  mainContainer.append(h1);
  return mainContainer;
}
