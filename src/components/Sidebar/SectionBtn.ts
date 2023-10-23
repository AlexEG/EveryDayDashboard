import HTML from "../HTML/HTML";

export default function SectionBtn(svgName: string, id?: string) {
  const styles =
    "group flex h-14 cursor-pointer items-center justify-center transition duration-300 hover:bg-slate-200 hover:text-slate-950";

  const div = HTML("div", styles, id);

  const img = HTML(
    "img",
    "h-6 w-6 invert group-hover:invert-0 opacity-75 group-hover:opacity-100 transition duration-300"
  );
  img.setAttribute("src", `/src/assets/${svgName}.svg`);
  div.append(img);

  return div;
}
