import HTML from "../../../../../components/HTML/HTML";

export default function Filter() {
  const styles =
    "w-full h-full col-start-1 col-end-2 row-start-1 row-end-2 border-2 border-rose-800 rounded-lg mt-8";
  const filterContainer = HTML("div", styles);
  return filterContainer;
}
