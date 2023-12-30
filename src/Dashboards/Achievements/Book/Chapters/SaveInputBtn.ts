import HTML from "../../../../components/HTML/HTML";
import updatePageProgress from "./updatePageProgress";

export default function SaveInputBtn() {
  const div = HTML("div", "p-1 hidden");
  const styles =
    "w-full h-full  text-center text-xs border font-medium   transition-colors duration-300 hover:border-rose-100 hover:bg-rose-100 active:opacity-90    group-odd:border-rose-600 group-even:border-blue-600 group-odd:hover:border-rose-300 group-even:hover:border-blue-300 group-odd:hover:bg-rose-300 group-even:hover:bg-blue-300 group-odd:text-rose-100 group-even:text-blue-100 group-odd:hover:text-rose-600 group-even:hover:text-blue-600";

  const saveBtn = HTML("button", styles, "", "SAVE");

  div.append(saveBtn);

  saveBtn.onclick = () => updatePageProgress(saveBtn);
  return div;
}
