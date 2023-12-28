import HTML from "../../../../components/HTML/HTML";
import SubCard from "./SubCard";

export default function SubCardContainer() {
  const styles = "border border-blue-400 w-full h-fit max-w-3xl mx-auto";
  const subCardContainer = HTML("div", styles);

  subCardContainer.append(
    SubCard("Chapter 1. Introduction to JavaScript", 22, 22),
    SubCard("Chapter 2. Lexical Structure", 9, 11),
    SubCard("Chapter 3. Types, Values, and Variables", 75, 118),
    SubCard("Chapter 4. Expressions and Operators", 10, 62)
  );
  return subCardContainer;
}
