import HTML from "../../HTML/HTML";

export default function MaximizeWindowBtn() {
  const styles =
    "group rounded-sm px-2 text-white transition-colors hover:bg-gray-200 hover:text-slate-950";
  const maximizeBtn = HTML("button", styles, "settings-close-btn");

  const styles2 = "w-5 h-5 invert group-hover:invert-0";
  const img = HTML("img", styles2, "", "", { src: "/src/assets/expand.svg" });

  maximizeBtn.append(img);

  maximizeBtn.onclick = () => {
    const box = document.querySelector(
      "div#settings-box #inner-box"
    ) as HTMLDivElement;

    if (box.dataset.isWindowMaximized === "false") {
      box.classList.replace("w-[40rem]", "w-[60rem]");
      box.classList.replace("h-96", "h-[40rem]");
      box.dataset.isWindowMaximized = "true";
    } else {
      box.classList.replace("w-[60rem]", "w-[40rem]");
      box.classList.replace("h-[40rem]", "h-96");
      box.dataset.isWindowMaximized = "false";
    }
  };
  return maximizeBtn;
}
