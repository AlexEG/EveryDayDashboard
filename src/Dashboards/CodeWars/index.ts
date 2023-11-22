import HTML from "../../components/HTML/HTML";
import Header from "./Header";

import HonorScoreChart from "./HonorScoreChart";

export default function CodeWars() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 p-4";

  const MainContainer = HTML("main", styles, "codewars");

  MainContainer.append(Header(), HonorScoreChart());
  return MainContainer;
}
