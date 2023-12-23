import HTML from "../../components/HTML/HTML";
import AniList_API_Favourites from "./API/AniList_API_Favourites";
import AniList_API_UserInfo from "./API/AniList_API_UserInfo";

export default function AniList() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 p-4";

  const MainContainer = HTML("main", styles, "anilist");
  const h1 = HTML("h1", "text-center text-neutral-50 font-bold", "", "AniList");

  // AniList_API_Favourites().then((data) => {
  //   console.log("data", data);
  // });

  AniList_API_UserInfo().then((data) => {
    console.log("User Info", data);
  });

  MainContainer.append(h1);
  return MainContainer;
}
