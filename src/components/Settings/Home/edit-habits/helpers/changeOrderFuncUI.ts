export default function changeOrderFuncUI(
  selectBtn: Element,
  HabitNum1: string,
  HabitNum2: string
) {
  selectBtn
    .querySelector(`option[value="${HabitNum2}"]`)
    .setAttribute("selected", "");

  // -------

  const switchHabit = document.querySelector(
    `#settings--home--edit-habits select[value="${HabitNum2}"]`
  );

  switchHabit.setAttribute("value", HabitNum1);
  switchHabit.querySelector("option[selected]").removeAttribute("selected");
  switchHabit
    .querySelector(`option[value="${HabitNum1}"]`)
    .setAttribute("selected", "");
}
