export default function toggleUnlockEditHistory() {
  const habitsColumnsContainer = document.querySelector(
    "#habit-tracker--tracker--habits-checkbox-grid---habits-column-container",
  ) as HTMLDivElement;

  if (habitsColumnsContainer.dataset.editHabitHistory === "false") {
    habitsColumnsContainer.dataset.editHabitHistory = "true";

    console.log(
      `%c ENABLE %c Edit Haibt History `,
      "background:black; color:#0f0 ; font-weight:900",
      "background:black; color:white",
    );
  } else {
    habitsColumnsContainer.dataset.editHabitHistory = "false";

    console.log(
      `%c DISABLE %c Edit Haibt History `,
      "background:black; color:#f00 ; font-weight:900",
      "background:black; color:white",
    );
  }
}
