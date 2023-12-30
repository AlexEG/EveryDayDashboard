export default function toggleExpandCollapseHighlight(
  expandBtn: HTMLElement
): void {
  // console.log("expandBtn", expandBtn);
  if (expandBtn.dataset.open === "false") {
    expandBtn.firstElementChild.classList.remove("invert");
    expandBtn.style.backgroundColor = getComputedStyle(expandBtn).borderColor;
    // console.log(getComputedStyle(expandBtn).borderColor);
    expandBtn.firstElementChild.setAttribute(
      "src",
      "/src/assets/chevron-up.svg"
    );
  } else {
    expandBtn.firstElementChild.classList.add("invert");
    expandBtn.removeAttribute("style");
    expandBtn.firstElementChild.setAttribute(
      "src",
      "/src/assets/chevron-down.svg"
    );
  }
}
