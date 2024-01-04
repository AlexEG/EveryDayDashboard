export default function toggleHighlight(
  navLinkBtn: HTMLButtonElement,
  navBar: HTMLElement
): void {
  // console.log(navLinkBtn.tagName);

  const highlight = ["text-rose-600", "border-rose-100", "bg-rose-100"];
  const normal = [
    "text-rose-100",
    "hover:text-rose-600",
    "border-rose-600",
    "hover:border-rose-100",
    "hover:bg-rose-100",
  ];

  for (const btn of navBar.children) {
    btn.classList.remove(...highlight);
    btn.classList.add(...normal);
  }
  navLinkBtn.classList.remove(...normal);
  navLinkBtn.classList.add(...highlight);

  console.log(
    `%c OPEN  %c{%c ${navLinkBtn.innerText}%c } `,
    "background:black; color:#0f0; font-weight:900",
    "background:black; color:white",
    "background:black; color:#c7f; font-weight:700; font-family: Arial",
    "background:black; color:white"
  );
}
