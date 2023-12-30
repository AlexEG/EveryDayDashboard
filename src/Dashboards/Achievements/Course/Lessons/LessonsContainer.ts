import HTML from "../../../../components/HTML/HTML";
import Lesson from "./Lesson";

export default function LessonsContainer(data: any) {
  const styles = " w-full h-fit max-w-3xl mx-auto hidden";
  const lessonsContainer = HTML("div", styles);

  for (const [key, values] of Object.entries(data)) {
    lessonsContainer.append(Lesson(key, values.isComplete));
  }
  return lessonsContainer;
}
