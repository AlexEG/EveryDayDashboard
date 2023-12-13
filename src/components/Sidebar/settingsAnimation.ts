export async function openSettingsAnimation() {
  const settings = document.querySelector("section#settings") as HTMLElement;
  if (settings.dataset.isSettingsOpen === "false") {
    console.log(
      " %c OPEN  Settings ",
      "background:black; color:#0f0;font-weight: 700;"
    );
    const openAnimation = settings.animate(
      {
        transform: ["translateY(100%)", "translateY(0)"],
        visibility: ["hidden", "visible"],
      },
      {
        fill: "forwards",
        duration: 500,
        iterations: 1,
        easing: "ease-in-out",
      }
    );
    settings.dataset.isSettingsOpen = "true";

    await openAnimation.finished;

    openAnimation.commitStyles();
    openAnimation.cancel();
  }
}

export async function closeSettingsAnimation() {
  const settings = document.querySelector("section#settings") as HTMLElement;
  if (settings.dataset.isSettingsOpen === "true") {
    console.log(
      " %c CLOSE  Settings ",
      "background:black; color:#f00;font-weight: 700;"
    );
    const closeAnimation = settings.animate(
      {
        transform: ["translateY(0)", "translateY(100%)"],
        visibility: ["visible", "hidden"],
      },
      {
        fill: "forwards",
        duration: 500,
        iterations: 1,
        easing: "ease-in-out",
      }
    );
    settings.dataset.isSettingsOpen = "false";

    await closeAnimation.finished;

    closeAnimation.commitStyles();
    closeAnimation.cancel();
  }
}
