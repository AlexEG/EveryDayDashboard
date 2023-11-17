import HTML from "../../components/HTML/HTML";

export default function DaysRow(daysNum: number) {
  const styles =
    "h-full bg-blue-400 row-start-2 row-end-3 col-start-2 col-end-3 flex";
  const daysRow = HTML("div", styles);

  const styles2 =
    "border h-full w-10 bg-pink-400 flex justify-center items-center text-pink-50 font-semibold";

  for (let i = 0; i < daysNum; i++) {
    const day = HTML("div", styles2, "", String(i + 1));
    daysRow.append(day);
  }

  return daysRow;
}
