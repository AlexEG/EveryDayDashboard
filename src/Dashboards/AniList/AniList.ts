import HTML from "../../components/HTML/HTML";
import AniList_API_Call from "./AniList_API_Call";
import responseDataInterface from "./responseDataInterface";

export default function AniList() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 p-4";

  const MainContainer = HTML("main", styles, "anilist");
  const h1 = HTML("h1", "text-center text-neutral-50 font-bold", "", "AniList");

  MainContainer.append(h1);

  AniList_API_Call().then((data: any) => {
    console.log("API DATA", data);

    const lists = data.data.MediaListCollection.lists;

    // const allImagURLs: string[] = [];

    for (const [key, list] of Object.entries(lists)) {
      console.log("key", key);
      console.log("list", list);

      for (const animeObj of list.entries) {
        console.log(animeObj.media.coverImage.large);
        const imgURL = animeObj.media.coverImage.large;
        const imageName = String(imgURL.match(/(?<=medium\/).*/g));

        window.DATA.downloadImg(
          imgURL,
          imageName,
          "dashboards/anilist/media/manga/cover-image/medium"
        );
      }
    }

    console.log("lists", lists);
  });

  return MainContainer;
}
