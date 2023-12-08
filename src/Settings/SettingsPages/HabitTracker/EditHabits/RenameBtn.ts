import HTML from "../../../../components/HTML/HTML";

export default function RenameBtn() {
  const styles =
    "z-10 text-indigo-100 text-center font-semibold w-24 py-px border-2 rounded-md  border-indigo-600 hover:text-indigo-600 transition-colors duration-300 hover:border-indigo-100 hover:bg-indigo-100 active:opacity-90 bg-slate-950 focus:outline-indigo-400";

  const renameBtn = HTML("button", styles, "", "Rename");
  renameBtn.dataset.allowEditing = "false";

  renameBtn.onclick = () => {
    const PREF_LOG_START = Date.now();

    // ----

    if (renameBtn.dataset.allowEditing === "true") {
      renameBtn.innerText = "Rename";
      renameBtn.dataset.allowEditing = "false";

      const NAME = renameBtn.parentElement.dataset.habitName;
      const input = renameBtn.parentElement.querySelector("input");

      input.classList.replace("text-neutral-50", "text-neutral-600");
      input.parentElement.classList.add("after:absolute");

      const habitNum = NAME.split("_").slice(0, 2).join("_");
      const newName = habitNum + "_" + input.value.split(" ").join("_").trim();

      const oldFilePaht = `dashboards/habit-tracker/${NAME}`;
      const newFilePaht = `dashboards/habit-tracker/${newName}`;

      window.DATA.renameJSONFile(oldFilePaht, newFilePaht);

      renameBtn.parentElement.dataset.habitName = newName;

      console.log(
        `%c Rename %c ${NAME} %c=> %c${newName}`,
        "background:black; color:white",
        "color:red",
        "",
        "color:green"
      );

      // change habit name in settings/home
      // console.log(newName);
    } else {
      renameBtn.innerText = "SAVE";
      renameBtn.dataset.allowEditing = "true";

      const input = renameBtn.parentElement.querySelector("input");

      input.classList.replace("text-neutral-600", "text-neutral-50");
      input.parentElement.classList.remove("after:absolute");
    }

    // ----
    const PREF_LOG_END = Date.now();
    const PREF_LOG_CSS = [
      "background:#000; color:#fff",
      "background:#000; color:#0f0",
    ];
    console.log(
      `%c Preformance / Time  %c${PREF_LOG_END - PREF_LOG_START}ms`,
      ...PREF_LOG_CSS
    );
  };

  return renameBtn;
}
