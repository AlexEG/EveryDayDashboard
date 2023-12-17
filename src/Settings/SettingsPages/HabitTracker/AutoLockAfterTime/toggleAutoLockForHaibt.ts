export default function toggleAutoLockForHaibt(
  checkbox: HTMLInputElement
): void {
  console.log("toggleAutoLockForHaibt");

  const container =
    checkbox.parentElement.parentElement.parentElement.parentElement;
  container.classList.toggle("opacity-50");

  const timeInput =
    checkbox.parentElement.parentElement.parentElement.previousElementSibling;

  timeInput.classList.contains("cursor-pointer")
    ? timeInput.classList.replace("cursor-pointer", "cursor-not-allowed")
    : timeInput.classList.replace("cursor-not-allowed", "cursor-pointer");

  // console.log(
  //   checkbox.parentElement.parentElement.parentElement.previousElementSibling
  // );
}
