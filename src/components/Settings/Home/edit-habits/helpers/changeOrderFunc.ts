// import changeOrderFuncUI from "./changeOrderFuncUI";

// export default function changeOrderFunc(selectBtn: Element) {
//   const newHabitNumber = selectBtn.value;

//   const HabitName1 = selectBtn.parentElement.parentElement.dataset.habitName;
//   const HabitNum1 = selectBtn.getAttribute("value");

//   // -------------- change the other habit

//   const switchHabit = document.querySelector(
//     `#settings--home--edit-habits select[value="${selectBtn.value}"]`
//   ).parentElement.parentElement;

//   const HabitName2 = switchHabit.dataset.habitName;
//   const HabitNum2 = switchHabit.dataset.habitNumber;

//   window.HabitsData.changeOrder(HabitName1, HabitNum1, newHabitNumber);

//   window.HabitsData.changeOrder(HabitName2, HabitNum2, HabitNum1);

//   console.log(`
// habit 1
//   number : ${HabitNum1}
//   name   : ${HabitName1}
// habit 2
//   number : ${HabitName2}
//   name   : ${HabitNum2}
//   `);

//   changeOrderFuncUI(selectBtn, HabitNum1, HabitNum2);
// }
