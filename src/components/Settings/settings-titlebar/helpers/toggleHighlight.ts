export default function toggleHighlight(e: Event) {
  const target = e.target as HTMLElement;

  if (target.matches("div.toggle")) {
    const checkbox = target.querySelector("input");

    if (checkbox.getAttribute("checked") === "") {
      checkbox.removeAttribute("checked");
      target.classList.replace("justify-end", "justify-start");
      target.classList.replace("bg-indigo-600", "bg-indigo-950");
      target.classList.replace("brightness-150", "brightness-90");
    } else {
      checkbox.setAttribute("checked", "");
      target.classList.replace("justify-start", "justify-end");
      target.classList.replace("bg-indigo-950", "bg-indigo-600");
      target.classList.replace("brightness-90", "brightness-150");
    }
  }
  //---
  if (target.matches("div.toggle > div")) {
    const checkbox = target.querySelector("input");

    if (checkbox.getAttribute("checked") === "") {
      checkbox.removeAttribute("checked");
      target.parentElement.classList.replace("justify-end", "justify-start");
      target.parentElement.classList.replace("bg-indigo-600", "bg-indigo-950");
      target.parentElement.classList.replace("brightness-150", "brightness-90");
    } else {
      checkbox.setAttribute("checked", "");
      target.parentElement.classList.replace("justify-start", "justify-end");
      target.parentElement.classList.replace("bg-indigo-950", "bg-indigo-600");
      target.parentElement.classList.replace("brightness-90", "brightness-150");
    }
  }
}
