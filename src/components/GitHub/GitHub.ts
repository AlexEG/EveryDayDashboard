import HTML from "../HTML/HTML";
export default function GitHub() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 p-4";

  const homeContainer = HTML("main", styles, "github");

  return homeContainer;
}
