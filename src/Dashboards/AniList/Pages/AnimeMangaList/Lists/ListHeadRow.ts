import HTML from "../../../../../components/HTML/HTML";

export default function ListHeadRow(
  listType: "ANIME" | "MANGA",
  listHeadRowTextColor: string,
) {
  const styles4 = `w-full h-10 grid grid-cols-[3.5rem_1fr_6rem_6rem_6rem] gap-x-2 leading-9 text-center font-medium ${
    listHeadRowTextColor || "text-white"
  }`;
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
