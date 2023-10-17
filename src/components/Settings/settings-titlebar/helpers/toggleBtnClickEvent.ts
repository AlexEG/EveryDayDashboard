import toggleHighlight from "./toggleHighlight";
export default function toggleBtnClickEvent() {
  window.addEventListener("DOMContentLoaded", () => {
    document
      .querySelector("fieldset#settings--titlebar--enable-disable-features")
      .addEventListener("click", (e) => {
        toggleHighlight(e);
      });
  });
}
