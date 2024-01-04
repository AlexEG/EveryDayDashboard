import HTML from "../../../../components/HTML/HTML";


export default function CoverImg() {
  const styles = "absolute -top-16 left-5 h-44"
  const coverImg = HTML("div", styles);


  const styles2 = "object-cover w-full h-full rounded drop-shadow-[0_10px_10px_rgb(225,29,72,0.3)]";
  const img = HTML("img", styles2, "anilist--info-header-anime--cover-image", "", {
    src: `/DATA/dashboards/anilist/media/anime/cover-image/extraLarge/bx161474-yLgY2vGrkVHY.jpg`,
  });
  coverImg.append(img);

  return coverImg
}
