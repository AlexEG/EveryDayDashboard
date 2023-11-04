export default function openInputBtnEvent() {
  document
    .querySelector("button#add-new-habit-open-input")
    .addEventListener("click", () => {
      console.log("add new habit | Open input field");

      document
        .querySelector("div#add-calendar-input")
        .classList.remove("hidden");
    });
}
