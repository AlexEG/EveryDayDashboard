import HTML from "../../../../components/HTML/HTML";
import SubCard from "./SubCard";

export default function SubCardContainer(data: any) {
  const styles = " w-full h-fit max-w-3xl mx-auto hidden";
  const subCardContainer = HTML("div", styles);

  for (const [key, values] of Object.entries(data)) {
    subCardContainer.append(
      SubCard(
        key,
        values.progressPages,
        values.pages,
        values.progressPercentage
      )
    );
  }
  return subCardContainer;
}
