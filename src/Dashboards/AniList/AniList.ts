import HTML from "../../components/HTML/HTML";
import AniList_API_Call from "./AniList_API_Call";
import responseDataInterface from "./responseDataInterface";

export default function AniList() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 p-4";

  const MainContainer = HTML("main", styles, "anilist");
  const h1 = HTML("h1", "text-center text-neutral-50 font-bold", "", "AniList");

  MainContainer.append(h1);

  AniList_API_Call().then((data: responseDataInterface) => {
    console.log("API DATA", data.data.User);
  });

  return MainContainer;
}
