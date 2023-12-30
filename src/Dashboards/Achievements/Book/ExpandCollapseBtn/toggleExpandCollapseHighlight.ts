export default function toggleExpandCollapseHighlight(
  expandBtn: HTMLElement
): void {
  // console.log("expandBtn", expandBtn);
  if (expandBtn.dataset.open === "false") {
    // expandBtn.dataset.open = "true";

    expandBtn.classList.add("bg-rose-300", "border-rose-300");
    expandBtn.classList.remove("border-rose-600");
    expandBtn.firstElementChild.classList.remove("invert");
    expandBtn.firstElementChild.setAttribute(
      "src",
      "/src/assets/chevron-up.svg"
    );
  } else {
    // expandBtn.dataset.open = "false";

    expandBtn.classList.remove("bg-rose-300", "border-rose-300");
    expandBtn.classList.add("border-rose-600");
    expandBtn.firstElementChild.classList.add("invert");
    expandBtn.firstElementChild.setAttribute(
      "src",
      "/src/assets/chevron-down.svg"
    );
  }
}
