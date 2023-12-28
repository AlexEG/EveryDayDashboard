import HTML from "../../../components/HTML/HTML";
import ProgressBar from "./ProgressBar";
import ExpandCollapseBtn from "./ExpandCollapseBtn/ExpandCollapseBtn";
import SubCardContainer from "./SubCard/SubCardContainer";

export default function Card(
  name: string,
  description: string,
  chapters: number,
  isBook: boolean,
  pages: number,
  progressChapter: number,
  progressPages: number,
  progressChapterPercentage: number,
  progressPagesPercentage: number,
  isComplete: boolean,
  data: any
) {
  const styles = "max-w-5xl mx-auto border border-rose-600 p-2 ";
  const CardContainer = HTML("div", styles);
  const titleDescriptionWrapper = HTML("div");
  const styles2 = "text-rose-100";
  const title = HTML("p", styles2, "", name);

  const styles3 = "text-rose-100/80 text-xs";

  const descriptionP = HTML("p", styles3, "", description);

  titleDescriptionWrapper.append(title, descriptionP);

  const styles4 = "h-20 grid grid-cols-[1fr_18rem_3rem] gap-x-8 ";

  const progressBarWrapper = HTML(
    "div",
    "h-full grid place-content-center gap-y-1"
  );
  console.log(chapters);

  progressBarWrapper.append(
    ProgressBar(progressPages, pages, progressPagesPercentage),
    ProgressBar(progressChapter, chapters, progressChapterPercentage)
  );
  const cardInfoWrapper = HTML("div", styles4);
  cardInfoWrapper.append(
    titleDescriptionWrapper,
    progressBarWrapper,
    ExpandCollapseBtn()
  );

  CardContainer.append(cardInfoWrapper, SubCardContainer(data));
  return CardContainer;
}
