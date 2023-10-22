export default function checkboxEvent() {
  const tbody = document.querySelector("#habits-table tbody");

  tbody.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.matches("input")) {
      const habitName = target.parentElement.dataset.habitName;
      const month = target.parentElement.dataset.month;
      const day = target.parentElement.dataset.row;

      console.log(habitName, month, day);

      window.HabitsData.editCalenderFileJSON(habitName, month, day);
    }
  });
}
