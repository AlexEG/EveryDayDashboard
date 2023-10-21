export default function highlightColRow() {
  window.addEventListener("DOMContentLoaded", () => {
    document
      .querySelector("table#habits-table")
      .addEventListener("mouseover", (e) => {
        const target = e.target as HTMLElement;

        if (target.matches("input")) {
          console.log("first");
        }
      });
  });
}
