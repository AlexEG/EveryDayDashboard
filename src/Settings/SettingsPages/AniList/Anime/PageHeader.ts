import ToggleBtn from "../../../../components/Settings/buttons/ToggleBtn";
import SettingsFieldset from "../../../../components/Settings/SettingsFieldset";
import HTML from "../../../../components/HTML/HTML";
import NumberInput from "../../../../components/Settings/buttons/NumberInput";

export default function PageHeader() {

  const ID = "settings--anilist--anime--page-header"
  const pageHeader = SettingsFieldset(
    "Page Header",
    ID
  );

  const wrapper = HTML("div")

  const infoHeader = ToggleBtn("Info Header", ID + "--info-header", true, () => console.log("infoHeader"))

  const autoSwitchBanner = ToggleBtn("Auto Switch Anime Details", ID + "--auto-switch-banner", true, () => console.log("autoSwitchBanner"))

  const AutoSwitchBannerRandomly = ToggleBtn("Switch in Random Order", ID + "--auto-switch-banner-in-random-order", true, () => console.log("animeBanners"))



  const switchingSpeed = NumberInput("Auto Switch Speed (ms)", ID + "--auto-switch-speed", 5000, [0, 600_000], () => console.log("switchingSpeed"))

  const seasonWithYear = ToggleBtn("Display Year of release with season", ID + "--Display Year of release with season badge", true, () => console.log("seasonWithYear"))




  wrapper.append(infoHeader, autoSwitchBanner, AutoSwitchBannerRandomly, switchingSpeed, seasonWithYear)
  pageHeader.append(wrapper)
  return pageHeader
}
