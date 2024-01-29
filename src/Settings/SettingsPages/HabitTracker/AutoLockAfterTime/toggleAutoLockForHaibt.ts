export default function toggleAutoLockForHaibt(
  checkbox: HTMLInputElement,
): void {
  const container =
    checkbox.parentElement.parentElement.parentElement.parentElement;
  container.classList.toggle("opacity-50");

  const timeInput = checkbox.parentElement.parentElement.parentElement
    .previousElementSibling as HTMLInputElement;

  timeInput.classList.contains("cursor-pointer")
    ? timeInput.classList.replace("cursor-pointer", "after:absolute")
    : timeInput.classList.replace("after:absolute", "cursor-pointer");

  if (!checkbox.hasAttribute("checked")) {
    const fileName = container.dataset.fileName;
    // console.log(fileName);
    window.DATA.editSettingsJSONFile_Value(
      `dashboards/habit-tracker/${fileName}`,
      "data",
      "",
      "metadata",
      "autoLockAfterTime",
    );

    // reset time input
    timeInput.removeAttribute("value");
    timeInput.value = "";

    console.log(
      `%c DISABLE %c AutoLockAfterTime  {%c${fileName
        .match(/(?<=habit_).*/)[0]
        .replace(/_/g, " ")}%c } `,
      "background:black; color:#f00 ; font-weight:900",
      "background:black; color:white",
      "background:black; color:#c7f",
      "background:black; color:white",
    );
  } else {
    const fileName = container.dataset.fileName;

    console.log(
      `%c ENABLE %c AutoLockAfterTime  {%c${fileName
        .match(/(?<=habit_).*/)[0]
        .replace(/_/g, " ")}%c } `,
      "background:black; color:#0f0 ; font-weight:900",
      "background:black; color:white",
      "background:black; color:#c7f",
      "background:black; color:white",
    );
  }
}
