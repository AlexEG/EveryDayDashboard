import HTML from "../../../../components/HTML/HTML";
import updatePageProgress from "./updatePageProgress";

export default function SaveInputBtn() {
  const div = HTML("div", "p-1 hidden");
  const styles =
    "w-full h-full text-rose-100 text-center text-xs border font-medium border-rose-600 hover:text-rose-600 transition-colors duration-300 hover:border-rose-100 hover:bg-rose-100 active:opacity-90";

  const saveBtn = HTML("button", styles, "", "SAVE");

  div.append(saveBtn);

  saveBtn.onclick = () => updatePageProgress(saveBtn);
  return div;
}
