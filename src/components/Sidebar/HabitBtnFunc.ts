import ChangeTitle from "../TitleBar/ChangeTitle";

export default function HabitBtnFunc() {
  document.querySelectorAll("div.sidebar-habit").forEach((btn) => {
    btn.addEventListener("click", () => {
      const title = btn.querySelector("span.cal-title").textContent;
      const filePath = btn.getAttribute("data-file-path");
      // console.log(title);

      ChangeTitle(title, filePath);
    });
  });
}
