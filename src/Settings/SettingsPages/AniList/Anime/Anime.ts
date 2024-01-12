import HTML from "../../../../components/HTML/HTML";
import AutoUpdateOfflineData from "./AutoUpdateOfflineData";
import PageHeader from "./PageHeader";
import PageHeaderInfoBadges from "./InfoBadges";
import ListsOrder from "./ListsOrder";



export default function Anime() {
  const styles = "border border-purple-600"
  const section = HTML("section", styles, "settings--aniList--anime")
  const h2 = HTML("h2", "text-center text-neutral-50 font-bold", "", "ANIME");



  section.append(h2, AutoUpdateOfflineData(), PageHeader(), PageHeaderInfoBadges(), ListsOrder())
  return section
}
