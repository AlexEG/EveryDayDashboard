import ToggleBtn from "../../../../components/Settings/buttons/ToggleBtn";
import SettingsFieldset from "../../../../components/Settings/SettingsFieldset";
import HTML from "../../../../components/HTML/HTML";

export default function AutoUpdateOfflineData() {

  const ID = "settings--anilist--anime--auto-update-offline-data"
  const autoUpdateOfflineData = SettingsFieldset(
    "Auto Update Offline Data",
    ID
  );

  const wrapper = HTML("div")


  const allAnimeDetailsData = ToggleBtn("Update All Details Files", ID + "--all-details-data", true, () => console.log("allAnimeDetailsData"))

  const animeList = ToggleBtn("Check&Update Anime List", ID + "--check-and-update-list", true, () => console.log("animeList"))

  const animeBanners = ToggleBtn("check&Update All Banners", ID + "--check-and-update-banners", true, () => console.log("animeBanners"))

  const animeCoverImageExtraLargeSize = ToggleBtn("check&Update All Extra Large Covers", ID + "--check-and-update-extra-large-cover", true, () => console.log("animeCoverImageExtraLargeSize"))

  const animeCoverImageLargeSize = ToggleBtn("check&Update All Extra Large Cover", ID + "--check-and-update-large-cover", true, () => console.log("animeCoverImageLargeSize"))


  wrapper.append(animeList, animeBanners, animeCoverImageExtraLargeSize, animeCoverImageLargeSize, allAnimeDetailsData)
  autoUpdateOfflineData.append(wrapper)
  return autoUpdateOfflineData
}
