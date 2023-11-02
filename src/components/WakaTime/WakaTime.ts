import HTML from "../HTML/HTML";

export default function WakaTime() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 p-4 overflow-auto";

  const MainContainer = HTML("main", styles, "WakaTime");

  // --------
  const styles2 = " flex justify-center py-4";
  const div1 = HTML("div", styles2);
  const img1 = HTML("img");
  img1.setAttribute(
    "src",
    "https://wakatime.com/badge/user/fbdfdc0f-d449-43dc-8090-ced03a22fe8c.svg"
  );
  div1.append(img1);

  // --------
  const styles3 = "grid grid-cols-4 gap-x-1 gap-y-4";
  const grid = HTML("div", styles3);

  // --------

  const embedsURL = [
    "https://wakatime.com/share/@AlexEG/96b52650-2866-42cd-9ced-c922d8fdc7e8.svg",
    "https://wakatime.com/share/@AlexEG/a29a39e5-baad-4ae5-84a5-8189c050ac73.svg",
    "https://wakatime.com/share/@AlexEG/8765dfb5-9a90-4133-a011-07b87e9b6ed8.svg",
    "https://wakatime.com/share/@AlexEG/0ce04439-b9b3-492e-85f0-af15cde7d901.svg",
    "https://wakatime.com/share/@AlexEG/e5c768c1-1627-4f4e-9c31-8b9d6e07b9d0.svg",
    "https://wakatime.com/share/@AlexEG/f155aaeb-8225-4e92-a56c-4fca559f1ebd.svg",
    "https://wakatime.com/share/@AlexEG/f36b0d33-be7a-493a-aa24-e1aad03ec444.svg",
    "https://wakatime.com/share/@AlexEG/8c5d6e4e-2c83-4a6d-9106-4ac8d1714190.svg",
    "https://wakatime.com/share/@AlexEG/263320fc-06e1-43e4-aac5-492df6e15cd2.svg",
    "https://wakatime.com/share/@AlexEG/ba6bd7e9-8951-4211-ab4a-9ad30807df1c.svg",
    "https://wakatime.com/share/@AlexEG/78631744-f81a-4ebf-b4d9-c75662322123.svg",
    "https://wakatime.com/share/@AlexEG/9f924734-f53e-48d2-87f1-6f9960463d83.svg",
  ];

  const expandShrinkChartStyles = [
    "fixed",
    "z-10",
    "overflow-hidden",
    "p-44",
    "flex",
    "justify-center",
    "items-center",
  ];
  const styles4 = "w-full h-full bg-indigo-950/75";
  const expandShrinkBtnStyles =
    "group absolute cursor-pointer border border-indigo-700 hover:bg-indigo-200 right-1 top-1 p-2";

  for (let i = 0; i < embedsURL.length; i++) {
    const div = HTML("div", styles4);

    const figure = HTML("figure", "relative");
    const embed = HTML("embed");
    embed.setAttribute("src", embedsURL[i]);

    // expand/shrink

    const btn = HTML("button", expandShrinkBtnStyles);
    btn.dataset.expand = "false";

    const styles2 = "w-5 h-5 invert group-hover:invert-0";

    const img = HTML("img", styles2);
    img.setAttribute("src", "/src/assets/expand.svg");

    btn.append(img);
    // btn onClick
    btn.onclick = () => {
      if (btn.dataset.expand === "true") {
        btn.children[0].setAttribute("src", "/src/assets/expand.svg");
        btn.dataset.expand = "false";

        btn.parentElement.parentElement.classList.remove(
          ...expandShrinkChartStyles
        );
        btn.parentElement.classList.remove("w-[1000px]");
      } else {
        btn.children[0].setAttribute("src", "/src/assets/shrink.svg");
        btn.dataset.expand = "true";

        btn.parentElement.parentElement.classList.add(
          ...expandShrinkChartStyles
        );
        btn.parentElement.classList.add("w-[1000px]");
      }
    };

    // -------------
    figure.append(embed, btn);
    div.append(figure);
    grid.append(div);
  }

  MainContainer.append(div1);
  MainContainer.append(grid);
  return MainContainer;
}
