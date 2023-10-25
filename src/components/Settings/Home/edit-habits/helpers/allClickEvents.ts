import changeOrderFunc from "./changeOrderFunc";

export default function allClickEvents() {
  window.addEventListener("DOMContentLoaded", () => {
    document
      .querySelector("fieldset#settings--home--edit-habits")
      .addEventListener("click", (e) => {
        renameFunc(e);
      });

    document
      .querySelectorAll("#settings--home--edit-habits select")
      .forEach((selectBtn) => {
        selectBtn.addEventListener("change", () => {
          changeOrderFunc(selectBtn);
        });
      });
  });
}
