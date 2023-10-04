export default function addRemoveActiveDay() {
  document.querySelectorAll("button.hex").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("opacity-50")) {
        // console.log("day marked");
        btn.classList.remove("opacity-50");
        btn.classList.remove("grayscale-[35%]");
        btn.classList.add("brightness-105");

        btn.classList.add("marked");

        btn
          .querySelector(" div > div > div > div > span")
          .classList.add("brightness-0");
      } else {
        // console.log("day unmarked");
        btn.classList.add("opacity-50");
        btn.classList.add("grayscale-[35%]");
        btn.classList.remove("brightness-105");

        btn.classList.remove("marked");

        btn
          .querySelector(" div > div > div > div > span")
          .classList.remove("brightness-0");
      }
    });
  });
}

// function addClassMarked() {
//   document.querySelectorAll("button.hex").forEach((btn) => {
//     if (localStorage.getItem(btn.id) === "marked") {
//       btn.classList.remove("opacity-50");
//       btn.classList.remove("grayscale-[35%]");
//       btn.classList.add("brightness-110");
//       btn.classList.add("marked");
//       btn
//         .querySelector(" div > div > div > div > span")
//         .classList.add("brightness-0");
//     }
//   });
// }
