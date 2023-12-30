import HTML from "../../../components/HTML/HTML";
import ProgressBar from "./ProgressBar";
import ExpandCollapseBtn from "./ExpandCollapseBtn/ExpandCollapseBtn";
import LessonsContainer from "./Lessons/LessonsContainer";

export default function Course(
  fileNameJSON: string,
  name: string,
  description: string,
  isComplete: boolean,
  lessons: number,
  progressLessons: number,
  progressLessonsPercentage: number,
  data: any
) {
  console.log("data", data);
  const styles = "max-w-5xl mx-auto my-4 border border-blue-600 p-2 ";
  const courseContainer = HTML("div", styles);
  courseContainer.dataset.fileName = fileNameJSON;

  const titleDescriptionWrapper = HTML("div", "overflow-hidden");
  const styles2 = "text-blue-100 truncate";
  const title = HTML("p", styles2, "", name);

  const styles3 = "text-blue-100/80 text-xs";

  const descriptionP = HTML("p", styles3, "", description);

  titleDescriptionWrapper.append(title, descriptionP);

  const styles4 = "h-20 grid grid-cols-[1fr_18rem_3rem] gap-x-8";

  const progressBarWrapper = HTML(
    "div",
    "h-full grid place-content-center gap-y-1"
  );
  // console.log(chapters);

  progressBarWrapper.append(
    ProgressBar(progressLessons, lessons, progressLessonsPercentage)
  );
  const cardInfoWrapper = HTML("div", styles4);
  cardInfoWrapper.append(
    titleDescriptionWrapper,
    progressBarWrapper,
    ExpandCollapseBtn()
  );

  courseContainer.append(cardInfoWrapper, LessonsContainer(data));
  return courseContainer;
}
