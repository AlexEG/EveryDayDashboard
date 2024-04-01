export default function toggleHighlight(toggleViewBtn: HTMLButtonElement) {
  const allBtns = toggleViewBtn.parentElement.children;

  const highlight = ["drop-shadow-[0_0_10px_rgb(225,29,72,1)]", "opacity-80"];
  for (const btn of allBtns) {
    btn.classList.remove(...highlight);
    btn.classList.add("opacity-50");
  }
  toggleViewBtn.classList.remove("opacity-50");
  toggleViewBtn.classList.add(...highlight);
}
