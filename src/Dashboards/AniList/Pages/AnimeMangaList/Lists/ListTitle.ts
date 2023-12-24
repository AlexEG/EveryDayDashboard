import HTML from "../../../../../components/HTML/HTML";

export default function ListTitle(listName: string, numberOfItem: number) {
  const styles = "text-rose-100 font-bold text-lg mb-1 pl-4";
  const listTitle = HTML("div", "flex  gap-x-1");

  const h2 = HTML("h2", styles, "", listName);

  const styles2 =
    "rounded-full w-5 h-5 text-xs border border-rose-600 text-rose-50 text-center drop-shadow-[0_0_5px_rgb(225,29,72,0.3)]";
  const span = HTML("span", styles2, "", String(numberOfItem));
  listTitle.append(h2, span);

  return listTitle;
}
