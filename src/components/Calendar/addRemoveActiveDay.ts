export default function addRemoveActiveDay() {
  document.querySelectorAll("button.hex").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("opacity-50")) {
        btn.classList.remove("opacity-50", "grayscale-[35%]");
        btn.classList.add("brightness-105", "marked");
        btn
          .querySelector(" div > div > div > div > span")
          .classList.add("brightness-0");
      } else {
        btn.classList.add("opacity-50", "grayscale-[35%]");
        btn.classList.remove("brightness-105", "marked");
        btn
          .querySelector(" div > div > div > div > span")
          .classList.remove("brightness-0");
      }
    });
  });
}
