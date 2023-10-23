export default function closeInputBtn() {
  document
    .querySelector("div#add-calendar-input button#close-add-new-calendar-btn")
    .addEventListener("click", () => {
      console.log("add new habit | close input field");
      document.querySelector("div#add-calendar-input").classList.add("hidden");
      // ---
      document.querySelector("div#add-calendar-input input").value = "";
    });
}
