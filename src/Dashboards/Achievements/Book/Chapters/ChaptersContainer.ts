import HTML from "../../../../components/HTML/HTML";
import Chapter from "./Chapter";

export default function ChapterContainer(data: any) {
  const styles = "w-full h-fit max-w-3xl mx-auto hidden";
  const chapterContainer = HTML("div", styles);

  let i = 0;
  for (const [key, values] of Object.entries(data)) {
    chapterContainer.append(
      Chapter(
        key,
        values.progressPages,
        values.pages,
        values.progressPercentage,
        i
      )
    );
    i++;
  }
  return chapterContainer;
}
