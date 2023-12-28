import HTML from "../../../components/HTML/HTML";
import ProgressBar from "./ProgressBar";
import ExpandCollapseBtn from "./ExpandCollapseBtn/ExpandCollapseBtn";
import SubCardContainer from "./SubCard/SubCardContainer";

export default function Card() {
  const styles = "max-w-5xl mx-auto border border-rose-600 p-2 ";
  const CardContainer = HTML("div", styles);
  const titleDescriptionWrapper = HTML("div");
  const styles2 = "text-rose-100";
  const title = HTML("p", styles2, "", "JavaScript the Definitive Guide 7th");

  const styles3 = "text-rose-100/80 text-xs";

  const description = HTML(
    "p",
    styles3,
    "",
    "This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level"
  );

  titleDescriptionWrapper.append(title, description);

  const styles4 = "h-20 grid grid-cols-[1fr_18rem_3rem] gap-x-8 ";

  const progressBarWrapper = HTML(
    "div",
    "h-full grid place-content-center gap-y-1"
  );
  progressBarWrapper.append(ProgressBar(630, 1245), ProgressBar(3, 18));
  const cardInfoWrapper = HTML("div", styles4);
  cardInfoWrapper.append(
    titleDescriptionWrapper,
    progressBarWrapper,
    ExpandCollapseBtn()
  );

  CardContainer.append(cardInfoWrapper);
  return CardContainer;
}
