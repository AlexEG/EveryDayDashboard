import updateAnimeListData from "../../../Dashboards/AniList/updateAnimeListData";
import HTML from "../../../components/HTML/HTML";
import updateMangaListData from "../../../Dashboards/AniList/updateMangaListData";
import updateUserInfoData from "../../../Dashboards/AniList/updateUserInfoData";
import downloadCovers from "../../../Dashboards/AniList/downloadCoverImages";
import downloadBanner from "../../../Dashboards/AniList/downloadBanner";

export default function AniList() {
  const styles =
    "w-[calc(100%-15rem)] h-full pt-6 px-4 pb-4 flex flex-col select-none overflow-y-auto";
  const mainContainer = HTML("section", styles, "settings--aniList");
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

  const updateAnimeListDataJSONBtn = HTML(
    "button",
    styles2,
    "",
    "Update Anime List Data"
  );

  const updateMangaListDataJSONBtn = HTML(
    "button",
    styles2,
    "",
    "Update Manga List Data"
  );

  const updateUserInfoDataJSONBtn = HTML(
    "button",
    styles2,
    "",
    "Update User Info Data"
  );

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

  updateAnimeListDataJSONBtn.onclick = updateAnimeListData;
  updateMangaListDataJSONBtn.onclick = updateMangaListData;
  updateUserInfoDataJSONBtn.onclick = updateUserInfoData;

  mainContainer.append(
    h1,
    updateAnimeBannerImagesBtn,
    updateMangaBannerImagesBtn,
    downloadAnimeCoverImage_Large,
    downloadAnimeCoverImage_ExtraLarge,
    downloadMangaCoverImage_Large,
    downloadMangaCoverImage_ExtraLarge,
    updateAnimeListDataJSONBtn,
    updateMangaListDataJSONBtn,
    updateUserInfoDataJSONBtn
  );

  return mainContainer;
}
