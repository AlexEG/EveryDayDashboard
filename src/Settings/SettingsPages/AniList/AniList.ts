import HTML from "../../../components/HTML/HTML";

export default function AniList() {
  const styles =
    "w-[calc(100%-15rem)] h-full pt-6 px-4 pb-4 flex flex-col select-none overflow-y-auto";
  const mainContainer = HTML("section", styles, "settings--aniList");
  const h1 = HTML("h1", "text-center text-neutral-50 font-bold", "", "AniList");

  mainContainer.append(h1);

  return mainContainer;
}
