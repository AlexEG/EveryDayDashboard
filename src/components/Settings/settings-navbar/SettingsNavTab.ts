import HTML from "../../HTML/HTML";

export default function SettingsNavTab(tabTitle: string, section: HTMLElement) {
  const styles =
    "relative h-full cursor-pointer bg-slate-800 py-1 px-2 text-center text-white before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full select-none";

  const tab = HTML("button", styles, "", tabTitle);

  tab.onclick = () => {
    document.querySelector("#settings-box section").remove();
    document.querySelector("#settings-box #inner-box").append(section);

    // highlight
    tab.parentElement.querySelectorAll("button").forEach((tab) => {
      if (tab.classList.contains("before:bg-violet-600")) {
        tab.classList.remove("before:bg-violet-600");
      }
    });
    tab.classList.add("before:bg-violet-600");
  };
  return tab;
}
