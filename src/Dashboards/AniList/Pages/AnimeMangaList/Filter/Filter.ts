import HTML from "../../../../../components/HTML/HTML";


export default function Filter(filterIsOpenByDefault: boolean) {

  const styles =
    `w-60 h-96 border-2 border-rose-800 rounded-lg mt-8 ${filterIsOpenByDefault ? "" : "hidden"}`;
  const filterContainer = HTML("div", styles, "filter-container");
  filterContainer.dataset.isOpen = String(filterIsOpenByDefault)

  return filterContainer;
}
