import HTML from "../../../../../components/HTML/HTML";

export default function CoverImg(
  type: "ANIME" | "MANGA",
  CoverImgDropShadow: string,
) {
  const styles = "absolute -top-16 left-5 h-44";
  const coverImg = HTML("div", styles);

  const styles2 = `object-cover w-full h-full rounded ${
    CoverImgDropShadow || "drop-shadow-[0_0_10px_#ffffff]"
  }`;
  const img = HTML(
    "img",
    styles2,
    `anilist--header-${type.toLowerCase()}--info-banner--cover-image`,
  );
  coverImg.append(img);

  return coverImg;
}
