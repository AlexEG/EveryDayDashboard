export default function ChangeTitle(newTitle: string, filePath: string): void {
  const title = document.querySelector("#title-bar-calendar-title");
  title.textContent = newTitle;
  title.setAttribute("data-file-path", filePath);
}
