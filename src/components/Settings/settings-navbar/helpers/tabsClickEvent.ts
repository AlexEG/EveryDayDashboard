import tabHighlight from "./tabHighlight";

export default function tabsClickEvent() {
  window.addEventListener("DOMContentLoaded", () => {
    document
      .querySelector("div#settings-box--tabs-wrapper")
      .addEventListener("click", (e) => {
        tabHighlight(e);
      });
  });
}
