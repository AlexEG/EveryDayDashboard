import HTML from "../../../../components/HTML/HTML";

export default function DaysColumn(
  numberOfDaysInThisMonth: number,
  todayNum: number
) {
  const styles = "w-fit flex flex-col border border-blue-800";
  const container = HTML("div", styles);

  const colHead = HTML(
    "div",
    "w-10 h-10 text-center text-blue-50 flex justify-center items-center border-b border-b-blue-800",
    "",
    "Days"
  );
  container.append(colHead);

  for (let i = 1; i <= numberOfDaysInThisMonth; i++) {
    const styles = `w-10 h-10  border-blue-800 flex justify-center items-center border-b last:border-none border-blue-800 ${
      todayNum === i
        ? "text-blue-900 bg-blue-200 font-semibold"
        : "text-blue-50"
    }`;

    const day = HTML("div", styles, "", String(i));
    container.append(day);
  }

  return container;
}
