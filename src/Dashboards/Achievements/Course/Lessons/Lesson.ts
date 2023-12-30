import HTML from "../../../../components/HTML/HTML";
import CheckBoxBtn from "./CheckBoxBtn";

export default function Lesson(title: string, isComplete: boolean) {
  const styles = "w-full h-8 grid grid-cols-[1fr_4rem] mb-1";
  const subCard = HTML("div", styles);

  const styles2 = "text-blue-100 px-1 text-sm leading-7 truncate";
  const p = HTML("p", styles2, "", title);

  subCard.append(p, CheckBoxBtn());
  return subCard;
}
