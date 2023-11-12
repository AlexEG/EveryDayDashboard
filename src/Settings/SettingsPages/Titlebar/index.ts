import HTML from "../../../components/HTML/HTML";

export default function Titlebar() {
  const styles = "bg-pink-500/50 w-[calc(100%-15rem)] h-full";
  const mainContainer = HTML("section", styles, "settings--titlebar");
  const h1 = HTML(
    "h1",
    "text-center text-neutral-50 font-bold",
    "",
    "Titlebar"
  );

  mainContainer.append(h1);
  return mainContainer;
}
