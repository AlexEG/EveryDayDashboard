import HTML from "../../HTML/HTML";

export default function SaveBtn() {
  const styles =
    "text-indigo-100 text-center font-semibold px-3 py-px border-2 rounded-md border-indigo-600 hover:text-indigo-600 transition-colors duration-300 hover:border-indigo-100 hover:bg-indigo-100 active:opacity-90 ";

  const saveBtn = HTML("button", styles, "birthday-save-inputs-btn", "SAVE");

  return saveBtn;
}
