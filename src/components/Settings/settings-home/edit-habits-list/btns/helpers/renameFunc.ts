export default function renameFunc(e: Event) {
  const target = e.target as HTMLElement;

  if (target.matches("button[data-rename-btn]")) {
    //-----
    if (target.dataset.allowEditing === "true") {
      console.log("the new name....");
      target.innerText = "Rename";
      target.dataset.allowEditing = "false";
      // ---
      const input = target.parentElement.querySelector("input");
      input.classList.replace("text-indigo-50", "text-slate-700");
      input.parentElement.classList.add("after:absolute");
      // ---
      const habitNumber = target.parentElement.dataset.habitNumber;
      const oldHabitName = target.parentElement.dataset.habitName;
      const newName = input.value;

      console.log(habitNumber, " | ", oldHabitName, " | ", newName);
      window.HabitsData.renameJSONFile(habitNumber, oldHabitName, newName);
      // change the name in dataset
      target.parentElement.dataset.habitName = newName;
    } else {
      console.log("allow editing name");
      target.innerText = "SAVE";
      target.dataset.allowEditing = "true";
      // ---
      const input = target.parentElement.querySelector("input");
      input.classList.replace("text-slate-700", "text-indigo-50");
      input.parentElement.classList.remove("after:absolute");
      // ---
    }
    //-----
  }
}
