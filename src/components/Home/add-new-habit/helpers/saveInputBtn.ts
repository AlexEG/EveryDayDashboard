import HTML from "../../../HTML/HTML";

export default function saveInputBtn() {
  document
    .querySelector("div#add-calendar-input  button#add-new-calendar-save-btn")
    .addEventListener("click", () => {
      console.log("add new habit | Save input && create JSON");
      const input = document.querySelector("div#add-calendar-input input");

      window.DATA.createJSONHaFileHabit(input.value.trim());

      document.querySelector("div#add-calendar-input").classList.add("hidden");
      // ------- add the new habit
      const habits = document.querySelector(
        "section#habits-names-nums div#habits-container-2"
      );

      const habit = HTML("div", "mb-0.5");
      const span1 = HTML(
        "span",
        "bg-neutral-300 text-neutral-950 px-1 rounded-sm",
        "",
        `${habits.childElementCount + 1}`
      );
      const span2 = HTML(
        "span",
        "pl-1 whitespace-nowrap",
        "",
        `${input.value.trim()}`
      );

      habit.append(span1, span2);
      habits.append(habit);
      input.value = "";
    });
}
