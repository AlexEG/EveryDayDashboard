import HTML from "../../components/HTML/HTML";
export default function GitHub() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 p-4";

  const MainContainer = HTML("main", styles, "github");

  const div = HTML("div", "flex justify-center mb-1 gap-1 mx-auto");

  const styles2 = "h-[150px] rounded-lg";
  const img1 = HTML("img", styles2, "", "", {
    src: "https://github-readme-streak-stats.herokuapp.com/?user=AlexEG&hide_border=true&card_width=420&theme=radical",
  });

  const img2 = HTML("img", styles2, "", "", {
    src: "https://github-readme-stats.vercel.app/api?username=AlexEG&show_icons=true&count_private=true&hide_border=true&theme=radical",
  });

  const img3 = HTML("img", styles2, "", "", {
    src: "https://github-readme-stats.vercel.app/api/top-langs/?username=AlexEG&layout=compact&hide_border=true&theme=radical",
  });

  const img4 = HTML("img", "h-[320px] rounded-lg mx-auto", "", "", {
    src: "https://github-readme-activity-graph.vercel.app/graph?username=AlexEG&theme=redical&height=400&hide_border=true",
  });

  const img5 = HTML("img", "rounded-lg mx-auto mt-2 mb-8", "", "", {
    src: "https://github-profile-trophy.vercel.app/?username=AlexEG&theme=radical&no-frame=true&column=8&margin-w=15&margin-h=15",
  });

  div.append(img1);
  div.append(img2);
  div.append(img3);

  MainContainer.append(img5);
  MainContainer.append(div);
  MainContainer.append(img4);

  return MainContainer;
}
