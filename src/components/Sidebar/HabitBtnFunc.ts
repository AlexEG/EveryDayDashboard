import ChangeTitle from "../TitleBar/ChangeTitle";

export default function HabitBtnFunc() {
  document.querySelectorAll("div.sidebar-habit").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("div.sidebar-habit").forEach((btn) => {
        btn
          .querySelector("span")
          .classList.remove("text-slate-950", "font-bold");
        btn.classList.remove("bg-slate-200");
        btn.classList.add("bg-slate-950");
      });

      const title = btn.querySelector("span.cal-title").textContent;
      const filePath = btn.getAttribute("data-file-path");

      btn.querySelector("span").classList.add("text-slate-950", "font-bold");
      btn.classList.add("bg-slate-200");
      btn.classList.remove("bg-slate-950");

      ChangeTitle(title, filePath);
    });
  });
}
