import HTML from "../../components/HTML/HTML";

export default function YouTube() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 p-4";

  const MainContainer = HTML("main", styles, "youtube");

  const h1 = HTML("h1", "text-center text-neutral-50 font-bold", "", "YouTube");

  const styles2 = "bg-indigo-600 px-8 py-2";

  const div = HTML("div", styles2, "id", "Text", { title: "button" });

  MainContainer.append(h1, div);
  return MainContainer;
}
