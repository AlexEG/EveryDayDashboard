import HTML from "../../../components/HTML/HTML";
import ProgressBar from "./ProgressBar";

export default function Card() {
  const styles =
    "h-24 border border-cyan-600 grid grid-cols-[1fr_11rem_3rem] gap-x-8";
  const CardContainer = HTML("div", styles);

  const titleDescriptionWrapper = HTML("div");
  const styles2 = "text-cyan-100";
  const title = HTML("p", styles2, "", "JavaScript the Definitive Guide 7th");

  const style3 = "text-cyan-100/80 ";

  const description = HTML(
    "p",
    style3,
    "",
    "This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level"
  );

  titleDescriptionWrapper.append(title, description);

  const styles4 =
    "border border-cyan-600 rounded-lg w-12 h-12 grid place-content-center";
  const addInput = HTML("button", styles4);
  const img = HTML("img", "invert w-6 h-6", "", "", {
    src: "/src/assets/plus.svg",
  });
  addInput.append(img);

  CardContainer.append(titleDescriptionWrapper, ProgressBar(), addInput);
  return CardContainer;
}
