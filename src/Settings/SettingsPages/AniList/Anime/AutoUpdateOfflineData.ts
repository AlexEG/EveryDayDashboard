import ToggleBtn from "../../../../components/Settings/buttons/ToggleBtn";
import SettingsFieldset from "../../../../components/Settings/SettingsFieldset";
import HTML from "../../../../components/HTML/HTML";

export default function AutoUpdateOfflineData() {

  const allAnimeDetailsData = ToggleBtn("Update All Details Files", "all-anime-details-data", true, () => console.log("allAnimeDetailsData"))

  const animeList = ToggleBtn("Check&Update Anime List", "check-and-update-anime-list", true, () => console.log("animeList"))

  const animeBanners = ToggleBtn("check&Update All Banners", "check-and-update-anime-banners", true, () => console.log("animeBanners"))

  const animeCoverImageExtraLargeSize = ToggleBtn("check&Update All Extra Large Covers", "check-and-update-anime-extra-large-cover", true, () => console.log("animeCoverImageExtraLargeSize"))

  const animeCoverImageLargeSize = ToggleBtn("check&Update All Extra Large Cover", "check-and-update-anime-large-cover", true, () => console.log("animeCoverImageLargeSize"))


  const autoUpdateOfflineData = SettingsFieldset(
    "Auto Update Offline Data",
    "settings--anilist--auto-update-offline-data"
  );

  const wrapper = HTML("div")

  wrapper.append(animeList, animeBanners, animeCoverImageExtraLargeSize, animeCoverImageLargeSize, allAnimeDetailsData)
  autoUpdateOfflineData.append(wrapper)
  return autoUpdateOfflineData
}
