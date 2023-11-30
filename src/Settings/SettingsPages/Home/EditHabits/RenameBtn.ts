import HTML from "../../../../components/HTML/HTML";

export default function RenameBtn() {
  const styles =
    "sidebar-rename-habit-save-btn z-10 text-indigo-100 text-center font-semibold w-24 py-px border-2 rounded-md  border-indigo-600 hover:text-indigo-600 transition-colors duration-300 hover:border-indigo-100 hover:bg-indigo-100 active:opacity-90 bg-slate-950 focus:outline-indigo-400";

  const renameBtn = HTML("button", styles, "", "Rename");
  renameBtn.dataset.allowEditing = "false";

  renameBtn.onclick = () => {
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

      const oldFilePaht = `habits/${NAME}`;
      const newFilePaht = `habits/${newName}`;

      window.DATA.renameJSONFile(oldFilePaht, newFilePaht);

      const oldName = renameBtn.parentElement.dataset.habitName
        .split("_")
        .slice(2)
        .join(" ");
      renameBtn.parentElement.dataset.habitName = newName;

      console.log(
        `%c Rename %c ${NAME} %c=> %c${newName}`,
        "background:black; color:white",
        "color:red",
        "",
        "color:green"
      );

      // change habit name in settings/home
      console.log(oldName);
      console.log(newName);

      const SettingsHomeDATA = new Promise((res, rej) => {
        res(JSON.parse(window.DATA.getJSONFileData("settings/home")));
      });

      SettingsHomeDATA.then((data: any) => {
        const colorPickerValue = data["habitsColor"][oldName];
        const newHabitName = newName.split("_").slice(2).join(" ");

        console.log(colorPickerValue);
        console.log(newHabitName);

        delete data["habitsColor"][oldName];
        data["habitsColor"][newHabitName] = colorPickerValue;

        window.DATA.editSettingsJSONFile_Value(
          "settings/home",
          "habitsColor",
          data["habitsColor"]
        );
      });
    } else {
      renameBtn.innerText = "SAVE";
      renameBtn.dataset.allowEditing = "true";

      const input = renameBtn.parentElement.querySelector("input");

      input.classList.replace("text-neutral-600", "text-neutral-50");
      input.parentElement.classList.remove("after:absolute");
    }

    // ----
  };

  return renameBtn;
}
