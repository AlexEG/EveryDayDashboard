import CalendarDay from "./CalendarDay";

export default function CalendarMonth(month: string, numOfDays: number): void {
  for (let i = 0; i < numOfDays; i++) {
    document.querySelector(`#month-${month}`).innerHTML += CalendarDay(
      `${month}`,
      i + 1
    );
  }
}
