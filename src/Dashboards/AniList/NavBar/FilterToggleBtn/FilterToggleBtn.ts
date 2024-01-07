import HTML from "../../../../components/HTML/HTML";
import toggleHighlight from "./toggleHighlight";

export default function FilterToggleBtn(filterIsOpenByDefault: boolean) {
  const styles =
    "w-fit border border-rose-600 rounded-lg px-3 ml-auto flex gap-4 justify-around absolute left-0 top-[3px] bottom-[3px]";

  const btnContainer = HTML(
    "div",
    styles,
  );

  const styles2 = filterIsOpenByDefault
    ? "drop-shadow-[0_0_15px_rgb(225,29,72,1)] opacity-80"
    : "opacity-25";
  const filterBtn = HTML("button", `${styles2} flex gap-x-1 justify-center items-center`) as HTMLButtonElement;


  const styles3 = "h-5 w-5 invert";
  const icon = HTML("img", styles3, "", "", {
    src: '/src/assets/adjustments-horizontal.svg',
  });

  const span = HTML("span", "text-rose-100", "", "Filters")
  filterBtn.append(icon, span);


  filterBtn.onclick = () => {
    toggleHighlight(filterBtn);
    const filterContainer = document.querySelector("div#filter-container") as HTMLDivElement
    if (filterContainer.dataset.isOpen === "false") {
      filterContainer.dataset.isOpen = "true"
      filterContainer.classList.remove("hidden")
    } else {
      filterContainer.dataset.isOpen = "false"
      filterContainer.classList.add("hidden")
    }
  };

  btnContainer.append(filterBtn)
  return btnContainer
}
