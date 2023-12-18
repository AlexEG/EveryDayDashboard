export default function toggleHabitList() {
  const habitsNameList = document.querySelector(
    "#habit-tracker--tracker--habit-list"
  );

  if (habitsNameList.classList.contains("hidden")) {
    habitsNameList.classList.remove("hidden");

    console.log(
      "%c HabitTracker /%c OPEN %c HabitList ",
      "background:black; color:#fff;",
      "background:black; color:#0f0;font-weight: 900;",
      "background:black; color:#fff;"
    );
  } else {
    habitsNameList.classList.add("hidden");

    console.log(
      "%c HabitTracker /%c CLOSE %c HabitList ",
      "background:black; color:#fff;",
      "background:black; color:#f00;font-weight: 900;",
      "background:black; color:#fff;"
    );
  }
}
