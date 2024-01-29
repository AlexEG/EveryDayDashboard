export default function toggleHighlight(filterBtn: HTMLButtonElement) {
  filterBtn.classList.toggle("drop-shadow-[0_0_15px_rgb(225,29,72,1)]");
  filterBtn.classList.toggle("opacity-80");
  filterBtn.classList.toggle("opacity-25");
}
