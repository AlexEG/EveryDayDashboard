import Home from "../Home/Home";
import GitHub from "../GitHub/GitHub";

export default function openCloseSections(sectionName: string) {
  console.log(sectionName);

  const ROOT = document.querySelector("div#root");
  document.querySelector("main").remove();

  if (sectionName === "home") {
    ROOT.append(Home());
  }
  if (sectionName === "github") {
    ROOT.append(GitHub());
  }
}
