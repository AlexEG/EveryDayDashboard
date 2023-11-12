export function openSettingsAnimation() {
  const settings = document.querySelector("section#settings") as HTMLElement;
  if (settings.dataset.isSettingsOpen === "false") {
    console.log(
      " %c OPEN  Settings ",
      "background:black; color:#0f0;font-weight: 700;"
    );
    settings.animate(
      {
        transform: ["translateY(100%)", "translateY(0)"],
        visibility: ["hidden", "visible"],
      },
      {
        fill: "forwards",
        duration: 500,
        iterations: 1,
        easing: "ease-in",
      }
    );
    settings.dataset.isSettingsOpen = "true";
  }
}

export function closeSettingsAnimation() {
  const settings = document.querySelector("section#settings") as HTMLElement;
  if (settings.dataset.isSettingsOpen === "true") {
    console.log(
      " %c CLOSE  Settings ",
      "background:black; color:#f00;font-weight: 700;"
    );
    settings.animate(
      {
        transform: ["translateY(0)", "translateY(100%)"],
        visibility: ["visible", "hidden"],
      },
      {
        fill: "forwards",
        duration: 500,
        iterations: 1,
        easing: "ease-in",
      }
    );
    settings.dataset.isSettingsOpen = "false";
  }
}
