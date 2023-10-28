import HTML from "../HTML/HTML";

export default function WakaTime() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 p-4";

  const MainContainer = HTML("main", styles, "WakaTime");

  const styles2 = "bg-pink-900 flex justify-center py-4";
  const div1 = HTML("div", styles2);
  const img1 = HTML("img");
  img1.setAttribute(
    "src",
    "https://wakatime.com/badge/user/fbdfdc0f-d449-43dc-8090-ced03a22fe8c.svg"
  );
  div1.append(img1);

  // const div1 = HTML("div", "bg-red-500 w-44 h-44");
  // const img2 = HTML("img", "w-10 mx-auto my-4");
  // img.setAttribute(
  //   "src",
  //   "https://wakatime.com/share/@AlexEG/96b52650-2866-42cd-9ced-c922d8fdc7e8.svg"
  // );
  // div1.append(img2);

  MainContainer.append(div1);
  // MainContainer.append(div1);
  return MainContainer;
}
