import HTML from "../../components/HTML/HTML";
import ChartCointainer from "./ChartCointainer";

export default function CodeWars() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 p-4";

  const MainContainer = HTML("main", styles, "codewars");

  const img = HTML("img", "mx-auto my-4");
  img.setAttribute("src", "https://www.codewars.com/users/AlexEG/badges/micro");

  MainContainer.append(img, ChartCointainer(20, [10, 90]));
  return MainContainer;
}
