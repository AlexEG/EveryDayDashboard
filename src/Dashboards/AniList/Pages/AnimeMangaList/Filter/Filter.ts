import HTML from "../../../../../components/HTML/HTML";
import Search from "./Search/Search";

export default function Filter(
  filterIsOpenByDefault: boolean,
  filterTheme: {
    containerBorderColor: string;
  }
) {
  const styles = `w-60 h-96 border-2 rounded-lg mt-8 p-2 ${
    filterIsOpenByDefault ? "" : "hidden"
  } ${filterTheme.containerBorderColor}`;
  const filterContainer = HTML("div", styles, "filter-container");
  filterContainer.dataset.isOpen = String(filterIsOpenByDefault);

  filterContainer.append(Search(filterTheme.containerBorderColor))
  return filterContainer;
}
