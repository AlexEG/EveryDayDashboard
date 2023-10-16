export default function tabHighlight(e: Event) {
  const target = e.target as HTMLInputElement;

  if (target.matches("button")) {
    target.parentElement.querySelectorAll("button").forEach((tab) => {
      if (tab.classList.contains("before:bg-violet-600"))
        tab.classList.remove("before:bg-violet-600");
    });
    console.log(target.parentElement.children);
    target.classList.add("before:bg-violet-600");
  }
}
