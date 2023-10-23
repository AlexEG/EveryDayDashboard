import HTML from "../../../../HTML/HTML";

export default function RenameBtn() {
  const styles =
    "sidebar-rename-habit-save-btn z-10 text-indigo-100 text-center font-semibold w-24 py-px border-2 rounded-md  border-indigo-600 hover:text-indigo-600 transition-colors duration-300 hover:border-indigo-100 hover:bg-indigo-100 active:opacity-90 bg-slate-950 focus:outline-indigo-400";
  const renameBtn = HTML("button", styles, "", "Rename");
  renameBtn.dataset.renameBtn = "";
  renameBtn.dataset.allowEditing = "false";

  return renameBtn;
}
