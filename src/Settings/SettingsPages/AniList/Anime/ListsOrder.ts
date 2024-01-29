import SettingsFieldset from "../../../../components/Settings/SettingsFieldset";
import HTML from "../../../../components/HTML/HTML";

export default function ListsOrder() {
  const ID = "settings--anilist--anime-ListsOrder";
  const listsOrder = SettingsFieldset("Lists Order", ID);

  const styles = "border mx-auto p-2";
  const listsColumn = HTML("ul", styles);

  const styles2 =
    "border border-purple-600 bg-purple-500 text-purple-50 font-semibold px-1 my-1 cursor-grab";
  const listName = (listName: string) => HTML("li", styles2, "", listName);

  listsColumn.append(
    listName("CURRENT"),
    listName("PLANNING"),
    listName("PAUSED"),
    listName("COMPLETED"),
    listName("DROPPED"),
  );
  listsOrder.append(listsColumn);
  return listsOrder;
}
