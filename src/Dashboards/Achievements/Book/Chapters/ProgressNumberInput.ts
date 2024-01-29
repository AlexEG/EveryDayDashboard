import HTML from "../../../../components/HTML/HTML";

export default function ProgressNumberInput(
  pageProgress: number,
  chapterPageNumber: number,
) {
  const styles = "p-1";
  const progressNumberInput = HTML("div", styles);

  const styles2 =
    "w-full h-full border group-odd:border-rose-950 group-even:border-blue-950 bg-black group-odd:text-rose-50 group-even:text-blue-50 text-center text-sm";
  const input = HTML("input", styles2, "", "", {
    type: "number",
    value: pageProgress,
    min: "0",
    max: chapterPageNumber,
  });

  function showSaveInputBtn() {
    const saveBtn = progressNumberInput.nextElementSibling;
    if (saveBtn.classList.contains("hidden")) {
      // console.log("saveBtn", saveBtn);
      saveBtn.classList.remove("hidden");
    }
  }

  input.onchange = () => showSaveInputBtn();

  progressNumberInput.append(input);
  return progressNumberInput;
}
