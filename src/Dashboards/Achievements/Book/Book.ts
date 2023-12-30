import HTML from "../../../components/HTML/HTML";
import ProgressBar from "./ProgressBar";
import ExpandCollapseBtn from "./ExpandCollapseBtn/ExpandCollapseBtn";
import ChaptersContainer from "./Chapters/ChaptersContainer";

export default function Book(
  fileNameJSON: string,
  name: string,
  description: string,
  chapters: number,
  pages: number,
  progressChapter: number,
  progressPages: number,
  progressChapterPercentage: number,
  progressPagesPercentage: number,
  data: any
) {
  const styles = "max-w-5xl mx-auto my-4 border border-rose-600  p-2 ";
  const bookContainer = HTML("div", styles);
  bookContainer.dataset.fileName = fileNameJSON;

  const titleDescriptionWrapper = HTML("div", "overflow-hidden");
  const styles2 = "text-rose-100 truncate";
  const title = HTML("p", styles2, "", name);

  const styles3 = "text-rose-100/80 text-xs";

  const descriptionP = HTML("p", styles3, "", description);

  titleDescriptionWrapper.append(title, descriptionP);

  const styles4 = "h-20 grid grid-cols-[1fr_18rem_3rem] gap-x-8";

  const progressBarWrapper = HTML(
    "div",
    "h-full grid place-content-center gap-y-1"
  );
  // console.log(chapters);

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

  bookContainer.append(cardInfoWrapper, ChaptersContainer(data));
  return bookContainer;
}
