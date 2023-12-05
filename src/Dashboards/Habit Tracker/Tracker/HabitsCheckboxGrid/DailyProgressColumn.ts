import HTML from "../../../../components/HTML/HTML";
import HabitTrackerDATA from "../../HabitTrackerDATA";

export default function DailyProgressColumn(
  numberOfDaysInThisMonth: number,
  thisMonthName: string,
  todayNum: number,
  thisYear: number
) {
  const styles = "w-fit flex flex-col border border-blue-800";
  const container = HTML("div", styles);

  const colHead = HTML(
    "div",
    "w-10 h-10 text-center text-blue-50 flex justify-center items-center border-b border-b-blue-800",
    "",
    "P"
  );
  container.append(colHead);

  const styles2 =
    "w-10 h-10 text-xs border-blue-800 flex justify-center items-center border-b last:border-none ";

  HabitTrackerDATA().then((data) => {
    const numOfHabits = Object.keys(data).length;

    // 1. get year month day
    // 2. get i in each habit
    // console.log(numOfHabits);

    for (let i = 1; i <= numberOfDaysInThisMonth; i++) {
      const highlightToday = todayNum === i ? "bg-black font-semibold" : "";

      let howManyCheckedInThisDay: null | number = null;
      // ------------
      for (const [, value] of Object.entries(data)) {
        // console.log(, value);

        if (todayNum >= i) howManyCheckedInThisDay += 0;
        if (value["habitData"][thisYear]) {
          if (value["habitData"][thisYear][thisMonthName]) {
            if (value["habitData"][thisYear][thisMonthName][i])
              howManyCheckedInThisDay++;
          }
        }
      }
      // console.log(howManyCheckedInThisDay);
      // ------------
      const percentage = Math.round(
        (howManyCheckedInThisDay / numOfHabits) * 100
      );

      console.log(percentage);
      const progressStyles =
        percentage <= 25
          ? " text-red-500"
          : percentage <= 75
          ? " text-yellow-500"
          : " text-green-500";

      const text =
        howManyCheckedInThisDay === null
          ? ""
          : `${howManyCheckedInThisDay}/${numOfHabits}`;

      const day = HTML(
        "div",
        styles2 + highlightToday + progressStyles,
        "",
        text
      );
      container.append(day);
    }
  });

  return container;
}
