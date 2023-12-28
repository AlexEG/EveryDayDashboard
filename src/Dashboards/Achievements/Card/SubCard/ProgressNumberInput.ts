import HTML from "../../../../components/HTML/HTML";

export default function ProgressNumberInput(
  pageProgress: number,
  chapterPageNumber: number
) {
  const styles = "p-1";
  const div = HTML("div", styles);

  const styles2 =
    "w-full h-full border border-rose-950 bg-black text-rose-50 text-center text-sm";
  const input = HTML("input", styles2, "", "", {
    type: "number",
    value: pageProgress,
    min: "0",
    max: chapterPageNumber,
  });

  div.append(input);
  return div;
}
