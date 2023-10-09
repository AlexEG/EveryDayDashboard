export default function OpenRightClickMenu() {
  document.querySelectorAll("div.sidebar-habit").forEach((btn) => {
    btn.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      btn
        .querySelector("div.sidebar-habit-right-click-menu")
        .classList.replace("visible", "invisible");

      btn
        .querySelector("div.sidebar-habit-right-click-menu")
        .classList.replace("invisible", "visible");
    });
  });
}
