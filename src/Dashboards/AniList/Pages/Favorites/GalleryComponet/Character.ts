import HTML from "../../../../../components/HTML/HTML";

export default function Character(imgURL: string, characterName: string) {
  const imgFileName = String(imgURL.match(/(?<=character\/large\/).*/g));

  const styles = "w-[200px] h-[320px] relative";
  const div = HTML("div", styles);

  const styles2 = "w-full h-full object-cover object-center rounded";
  const img = HTML("img", styles2, "", "", {
    src: `/DATA/dashboards/anilist/media/characters/${imgFileName}`,
  });

  const styles3 =
    "absolute bottom-0 left-0 right-0 h-10 truncate text-white/90 text-sm font-medium bg-black/50 text-center leading-10 px-1";
  const span = HTML("span", styles3, "", characterName);

  div.append(img, span);
  return div;
}
