import HabitBtn from "./HabitBtn";

export default function AddNewHabitFunc() {
  const habitContainer = document.querySelector("#sidebar-habits-container");
  const addNewHabitBtn = document.querySelector("#add-new-habit-btn");

  let n = 0;
  addNewHabitBtn.addEventListener("click", () => {
    habitContainer.innerHTML += HabitBtn(n + 1, "Go Outside 15 mins");
    n++;
    console.log(n);
  });
}
