export default function deleteFunc(e: Event) {
  const target = e.target as HTMLElement;

  if (target.matches("button[data-delete-btn]")) {
    const habitName = target.parentElement.dataset.habitName;
    const habitNumber = target.parentElement.dataset.habitNumber;
    window.HabitsData.deleteFile(habitNumber, habitName);
    console.log("Delete File successfully. || ", habitName);
  }

  if (target.matches("img[data-delete-btn]")) {
    const habitName = target.parentElement.parentElement.dataset.habitName;
    const habitNumber = target.parentElement.parentElement.dataset.habitNumber;

    window.HabitsData.deleteFile(habitNumber, habitName);
    console.log("Delete File successfully. || ", habitName);
  }
}
