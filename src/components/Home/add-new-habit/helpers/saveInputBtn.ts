export default function saveInputBtn() {
  document
    .querySelector("div#add-calendar-input  button#add-new-calendar-save-btn")
    .addEventListener("click", () => {
      console.log("add new habit | Save input && create JSON");
      const input = document.querySelector("div#add-calendar-input input");

      window.HabitsData.createJSONHaFileHabit(input.value.trim());

      document.querySelector("div#add-calendar-input").classList.add("hidden");
    });
}
