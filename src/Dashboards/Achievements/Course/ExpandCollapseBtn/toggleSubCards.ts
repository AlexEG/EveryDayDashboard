export default function toggleSubCards(expandBtn: HTMLElement): void {
  const cardContainer = expandBtn.parentElement.parentElement.parentElement;
  // console.log("cardContainer:", cardContainer);

  if (expandBtn.dataset.open === "false") {
    expandBtn.dataset.open = "true";
    console.log("Open Sub Cards");
    cardContainer.lastElementChild.classList.remove("hidden");
  } else {
    expandBtn.dataset.open = "false";
    console.log("Close Sub Cards");
    cardContainer.lastElementChild.classList.add("hidden");
  }
}
