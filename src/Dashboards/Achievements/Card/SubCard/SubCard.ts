import HTML from "../../../../components/HTML/HTML";
import ProgressBar from "../ProgressBar";
import ProgressNumberInput from "./ProgressNumberInput";

export default function SubCard(
  title: string,
  pageProgress: number,
  chapterPageNumber: number
) {
  const styles = "w-full h-8 grid grid-cols-[1fr_17rem_4rem] mb-1";
  const subCard = HTML("div", styles);

  const styles2 = "text-rose-100 px-1 text-sm leading-7";
  const p = HTML("p", styles2, "", title);

  subCard.append(
    p,
    ProgressBar(pageProgress, chapterPageNumber),
    ProgressNumberInput(pageProgress, chapterPageNumber)
  );
  return subCard;
}
