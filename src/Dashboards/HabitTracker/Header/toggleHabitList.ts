export default function toggleHabitList() {
  const habitsNameList = document.querySelector(
    "#habit-tracker--tracker--habit-list",
  );

  if (habitsNameList.classList.contains("hidden")) {
    habitsNameList.classList.remove("hidden");

    console.log(
      `%c ENABLE %c Haibt List `,
      "background:black; color:#0f0 ; font-weight:900",
      "background:black; color:white",
    );

    window.DATA.editSettingsJSONFile_ON_OFF(
      "settings/habit-tracker",
      "data",
      "isHabitListDisplayedByDefault",
    );
  } else {
    habitsNameList.classList.add("hidden");

    console.log(
      `%c DISABLE %c Haibt List `,
      "background:black; color:#f00 ; font-weight:900",
      "background:black; color:white",
    );

    window.DATA.editSettingsJSONFile_ON_OFF(
      "settings/habit-tracker",
      "data",
      "isHabitListDisplayedByDefault",
    );
  }
}
