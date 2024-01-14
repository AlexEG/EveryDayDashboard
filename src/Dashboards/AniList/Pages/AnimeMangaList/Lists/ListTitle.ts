import HTML from "../../../../../components/HTML/HTML";

export default function ListTitle(
  listName: string,
  numberOfItem: number,
  listTitleTheme: {
    textColor: string;
    numberOfItemsCircle: string;
  }
) {
  const styles = `flex gap-x-1 ${listTitleTheme.textColor || "text-while"}`;
  const listTitle = HTML("div", styles);

  const styles2 = "font-bold text-lg mb-1 pl-4";
  const h2 = HTML("h2", styles2, "", listName);

  const styles3 = `rounded-full w-5 h-5 text-xs border  text-center ${listTitleTheme.numberOfItemsCircle}`;
  const span = HTML("span", styles3, "", String(numberOfItem));

  listTitle.append(h2, span);
  return listTitle;
}
