import HTML from "../../../components/HTML/HTML";

export default function ResetAllBtn() {
  const styles = "w-full flex justify-end pt-4";
  const resetBtn = HTML("div", styles);

  const styles2 =
    "text-indigo-100 text-center font-semibold px-3 py-px border-2 rounded-md border-indigo-600 hover:text-indigo-600 transition-colors duration-300 hover:border-indigo-100 hover:bg-indigo-100 active:opacity-90 ";

  const btn = HTML("button", styles2, "", "Reset All");
  resetBtn.append(btn);

  return resetBtn;
}
