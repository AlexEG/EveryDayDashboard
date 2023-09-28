export default function ChangeTitle(newTitle: string): void {
  document.querySelector("#title-bar-calendar-title").textContent = newTitle;
}
