import HTML from "../../../../../components/HTML/HTML";

export default function ListHeadRow(listType: "ANIME" | "MANGA") {
  const styles4 =
    "w-full h-10 grid grid-cols-[3.5rem_3fr_1fr_1fr_1fr] gap-x-2 leading-9 text-rose-100 text-center font-medium ";
  const listHeadRow = HTML("div", styles4);

  const title = HTML("p", "text-left col-start-2", "", "Title");
  const score = HTML("p", "", "", "Score");

  if (listType === "ANIME") {
    const progress = HTML("p", "", "", "Progress");
    const type = HTML("p", "", "", "Type");

    listHeadRow.append(title, score, progress, type);
    return listHeadRow;
  }

  const chapters = HTML("p", "", "", "Chapters");
  const volumes = HTML("p", "", "", "Volumes");

  listHeadRow.append(title, score, chapters, volumes);
  return listHeadRow;
}
