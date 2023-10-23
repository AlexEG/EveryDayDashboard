import HTML from "../../../../HTML/HTML";

export default function RenameBtn() {
  const rename = HTML(
    "button",
    "sidebar-rename-habit-save-btn z-10 text-indigo-100 text-center font-semibold px-1 py-px border-2 rounded-md  border-indigo-600 hover:text-indigo-600 transition-colors duration-300 hover:border-indigo-100 hover:bg-indigo-100 active:opacity-90 bg-slate-950",
    "",
    "Rename"
  );
  return rename;
}
