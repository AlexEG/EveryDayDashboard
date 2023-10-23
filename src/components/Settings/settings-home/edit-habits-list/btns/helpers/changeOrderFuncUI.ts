export default function changeOrderFuncUI(selectBtn: Element) {
  const oldNum = selectBtn.getAttribute("value");

  selectBtn.setAttribute("value", selectBtn.value);

  selectBtn.querySelector("option[selected]").removeAttribute("selected");
  selectBtn
    .querySelector(`option[value="${selectBtn.value}"]`)
    .setAttribute("selected", "");

  // -------

  const switchHabit = document.querySelectorAll(
    `#settings--home--edit-habits select[value="${selectBtn.value}"]`
  )[1];

  switchHabit.setAttribute("value", oldNum);
  switchHabit.querySelector("option[selected]").removeAttribute("selected");
  switchHabit
    .querySelector(`option[value="${oldNum}"]`)
    .setAttribute("selected", "");
}
