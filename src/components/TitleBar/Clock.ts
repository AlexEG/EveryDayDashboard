import HTML from "../HTML/HTML";
export default function Clock(
  clockTimeColor: string,
  clock_AM_PMColor: string,
) {
  const clock = HTML("div", "flex gap-1", "titlebar--clock");

  const time = HTML("time", "text-xs text-white/95", "title-bar-clock", "", {
    datetime: "00:00",
  });

  const timeDayNight = HTML("span", "text-xs", "title-bar-session");

  if (clockTimeColor) time.style.color = clockTimeColor;
  if (clock_AM_PMColor) timeDayNight.style.color = clock_AM_PMColor;

  clock.append(time, timeDayNight);
  return clock;
}
