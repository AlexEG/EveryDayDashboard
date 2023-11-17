import HTML from "../../components/HTML/HTML";

export default function ChartDay(score: number) {
  const styles =
    "odd:bg-pink-500 even:bg-yellow-500 row-span-full grid grid-cols-1 grid-rows-[repeat(10,_40px)]";
  const ChartDay = HTML("div", styles);

  return ChartDay;
}
