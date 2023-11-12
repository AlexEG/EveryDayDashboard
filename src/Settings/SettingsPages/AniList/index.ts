import HTML from "../../../components/HTML/HTML";

export default function AniList() {
  const styles = "bg-purple-500/50 w-[calc(100%-15rem)] h-full";
  const mainContainer = HTML("section", styles, "settings--aniList");
  const h1 = HTML("h1", "text-center text-neutral-50 font-bold", "", "AniList");

  mainContainer.append(h1);
  return mainContainer;
}
