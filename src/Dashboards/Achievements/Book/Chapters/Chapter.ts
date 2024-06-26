import HTML from "../../../../components/HTML/HTML";
import ProgressBar from "../ProgressBar";
import ProgressNumberInput from "./ProgressNumberInput";
import SaveInputBtn from "./SaveInputBtn";

export default function Chapter(
  title: string,
  pageProgress: number,
  chapterPageNumber: number,
  progressPercentage: number,
  i?: number,
) {
  const styles = "w-full h-8 grid grid-cols-[1fr_15rem_4rem_4rem] gap-x-1 mb-1";
  const subCard = HTML("div", styles);

  const styles2 =
    "group-odd:text-rose-100 group-even:text-blue-100 px-1 text-sm leading-7 truncate";
  const p = HTML("p", styles2, "", title);

  subCard.append(
    p,
    ProgressBar(pageProgress, chapterPageNumber, progressPercentage, i),
    ProgressNumberInput(pageProgress, chapterPageNumber),
    SaveInputBtn(),
  );
  return subCard;
}
