import HTML from "../../../../components/HTML/HTML";


export default function CoverImg(type: "ANIME" | "MANGA") {
  const styles = "absolute -top-16 left-5 h-44"
  const coverImg = HTML("div", styles);


  const styles2 = "object-cover w-full h-full rounded drop-shadow-[0_10px_10px_rgb(225,29,72,0.3)]";
  const img = HTML("img", styles2, `anilist--info-header-${type.toLowerCase()}--cover-image`);
  coverImg.append(img);

  return coverImg
}
