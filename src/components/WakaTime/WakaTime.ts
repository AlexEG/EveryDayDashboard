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
  const styles3 = "grid grid-cols-4 gap-1 relative";
  const grid = HTML("div", styles3);

  // --------
  const styles4 =
    "hover:w-[1000px] hover:z-10 hover:absolute hover:top-1/2 hover:left-1/2 hover:-translate-x-1/2 hover:-translate-y-1/2";

  const embedsURL = [
    "https://wakatime.com/share/@AlexEG/96b52650-2866-42cd-9ced-c922d8fdc7e8.svg",
    "https://wakatime.com/share/@AlexEG/a29a39e5-baad-4ae5-84a5-8189c050ac73.svg",
    "https://wakatime.com/share/@AlexEG/8765dfb5-9a90-4133-a011-07b87e9b6ed8.svg",
    "https://wakatime.com/share/@AlexEG/0ce04439-b9b3-492e-85f0-af15cde7d901.svg",
    "https://wakatime.com/share/@AlexEG/e5c768c1-1627-4f4e-9c31-8b9d6e07b9d0.svg",
    "https://wakatime.com/share/@AlexEG/f155aaeb-8225-4e92-a56c-4fca559f1ebd.svg",
    "https://wakatime.com/share/@AlexEG/f36b0d33-be7a-493a-aa24-e1aad03ec444.svg",
    "https://wakatime.com/share/@AlexEG/8c5d6e4e-2c83-4a6d-9106-4ac8d1714190.svg",
  ];

  for (let i = 0; i < embedsURL.length; i++) {
    const figure = HTML("figure");
    const embed = HTML("embed");
    embed.setAttribute("src", embedsURL[i]);

    figure.append(embed);
    grid.append(figure);
  }

  MainContainer.append(div1);
  MainContainer.append(grid);
  return MainContainer;
}
