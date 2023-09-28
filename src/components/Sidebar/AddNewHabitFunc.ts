// import HabitBtn from "./HabitBtn";

// export default function AddNewHabitFunc() {
//   const [addNewHabitBtn,input, inputContainer, inputSaveBtn, sidebarHabitsContainer] = [
//     document.querySelector("#add-new-habit-btn"),
//     document.querySelector("section#add-calendar-input input"),
//     document.querySelector("section#add-calendar-input"),
//     document.querySelector("button#add-new-calendar-save-btn"),
//     document.querySelector("div#sidebar-habits-container"),
//   ];

//   inputContainer.classList.remove("hidden");

//   let TotalHabitNums = 1;

//   inputSaveBtn.addEventListener("click", () => {
//     sidebarHabitsContainer.innerHTML += HabitBtn(TotalHabitNums, input.value);

//     inputContainer.classList.add("hidden");

//     // changeCalendarTitle();
//     input.value = "";
//     TotalHabitNums++;
//   });
// }
