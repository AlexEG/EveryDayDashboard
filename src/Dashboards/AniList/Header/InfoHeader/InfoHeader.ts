import HTML from "../../../../components/HTML/HTML";
import CoverImg from "./CoverImg";
import InfoBanner from "./InfoBanner";



export default function InfoHeader() {
  const styles = " h-28 relative pt-6 pb-2"
  const infoBanner = HTML("div", styles)

  infoBanner.append(CoverImg(), InfoBanner())
  return infoBanner
}
