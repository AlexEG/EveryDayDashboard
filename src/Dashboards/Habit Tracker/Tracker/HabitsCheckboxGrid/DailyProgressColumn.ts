import HTML from "../../../../components/HTML/HTML";
import HabitTrackerDATA from "../../HabitTrackerDATA";
import { dailyProgressColumnAnimation } from "../../HabitTrackerAnimation";

export default function DailyProgressColumn(
  numberOfDaysInThisMonth: number,
  thisMonthName: string,
  todayNum: number,
  thisYear: number
) {
  const styles = "w-fit flex flex-col border border-blue-800 select-none ";
  const container = HTML("div", styles);

  const colHead = HTML(
    "div",
    "w-10 h-10 text-center text-blue-50 flex justify-center items-center border-b border-b-blue-800",
    "",
    "P"
  );
  container.append(colHead);

  const styles2 =
    "w-10 h-10 text-xs relative border-blue-800 border-b last:border-none overflow-x-hidden ";

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

      // console.log(percentage);

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

      const day = HTML("div", styles2 + highlightToday + progressStyles);

      const styles3 = "w-full h-full flex justify-center items-center ";
      const span1 = HTML("span", styles3, "", text);
      const span2 = HTML("span", styles3, "", `${percentage}%`);

      const wrapper = HTML("div", "w-20 h-full grid grid-cols-2");
      wrapper.append(span1, span2);
      dailyProgressColumnAnimation(wrapper, i * 200);

      day.append(wrapper);
      container.append(day);
    }
  });

  return container;
}
