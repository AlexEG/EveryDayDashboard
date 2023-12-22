import HTML from "../../components/HTML/HTML";
import AniList_API_Call from "./AniList_API_Call";
import responseDataInterface from "./responseDataInterface";
import AniList_API_AnimeBanners from "./AniList_API_AnimeMangaBanners";
import downloadBanner from "./downloadBanner";
import downloadCovers from "./downloadCoverImages";

export default function AniList() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-neutral-950 border-t border-l border-neutral-400 p-4";

  const MainContainer = HTML("main", styles, "anilist");
  const h1 = HTML("h1", "text-center text-neutral-50 font-bold", "", "AniList");

  const styles2 =
    "text-indigo-100 text-center font-semibold px-3 py-px border-2 rounded-md border-indigo-600 hover:text-indigo-600 transition-colors duration-300 hover:border-indigo-100 hover:bg-indigo-100 active:opacity-90 m-1";

  const updateAnimeBannerImagesBtn = HTML(
    "button",
    styles2,
    "",
    "Update Anime Banner Images"
  );

  const updateMangaBannerImagesBtn = HTML(
    "button",
    styles2,
    "",
    "Update MANGA Banner Images"
  );

  const downloadAnimeCoverImage_Large = HTML(
    "button",
    styles2,
    "",
    "Anime Cover Large"
  );
  const downloadAnimeCoverImage_ExtraLarge = HTML(
    "button",
    styles2,
    "",
    "Anime Cover ExtraLarge"
  );

  const downloadMangaCoverImage_Large = HTML(
    "button",
    styles2,
    "",
    "Manga Cover Large"
  );
  const downloadMangaCoverImage_ExtraLarge = HTML(
    "button",
    styles2,
    "",
    "Manga Cover ExtraLarge"
  );

  // 1. get the custom data (bannerURL & animeTitle)
  // 2. download the banner into dashboards/anilist/media/anime/banner
  // 3. get the img type from the bannerURL .jpg .png
  // 4. save the images w/ the name = anime_title-Banner + imgType
  //    4a. sometimes the anime dosen't have an english value (null)
  //    4b. so the userPreferred value will be used as backup
  // there is problem with the file names, if the animeTitle have (:)
  // so for now just make imgFileName === URL img name
  // and sometimes the bannerImage is (null)
  updateAnimeBannerImagesBtn.onclick = () => downloadBanner("ANIME");
  updateMangaBannerImagesBtn.onclick = () => downloadBanner("MANGA");

  downloadAnimeCoverImage_Large.onclick = () =>
    downloadCovers("ANIME", "large");
  downloadAnimeCoverImage_ExtraLarge.onclick = () =>
    downloadCovers("ANIME", "extraLarge");
  downloadMangaCoverImage_Large.onclick = () =>
    downloadCovers("MANGA", "large");
  downloadMangaCoverImage_ExtraLarge.onclick = () =>
    downloadCovers("MANGA", "extraLarge");

  MainContainer.append(
    h1,
    updateAnimeBannerImagesBtn,
    updateMangaBannerImagesBtn,
    downloadAnimeCoverImage_Large,
    downloadAnimeCoverImage_ExtraLarge,
    downloadMangaCoverImage_Large,
    downloadMangaCoverImage_ExtraLarge
  );

  // AniList_API_Call().then((data: any) => {
  //   console.log("API DATA", data);
  // });

  return MainContainer;
}
