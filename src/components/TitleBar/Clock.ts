import HTML from "../HTML/HTML";
export default function Clock() {
  const clock = HTML("div", "flex gap-1");
  const time = HTML("time", "text-xs text-white/95", "title-bar-clock", "", {
    datetime: "00:00",
  });

  const timeDayNight = HTML("span", "text-xs", "title-bar-session");
  clock.append(time, timeDayNight);
  return clock;
}
