import { dailyProgressColumnAnimation } from "../../../Dashboards/HabitTracker/HabitTrackerAnimation";
import HTML from "../../../components/HTML/HTML";
// import { ProgressBoxAnimation } from "./ProgressBoxAnimation";

export default function ProgressBox(
  percentage: number,
  progress: number,
  max: number,
  i?: number
) {
  const progressStyles =
    percentage <= 25
      ? "text-red-500"
      : percentage <= 75
      ? "text-yellow-500"
      : "text-green-500";

  const styles = "h-5 w-16 text-xs overflow-hidden " + progressStyles;
  const progressBox = HTML("div", styles);

  const styles3 = "w-full h-full flex justify-center items-center";
  const span1 = HTML(
    "span",
    styles3,
    "",
    `${Number(progress).toLocaleString()}/${Number(max).toLocaleString()}`
  );
  const span2 = HTML("span", styles3, "", `${percentage}%`);

  const wrapper = HTML("div", "h-full w-32 grid grid-cols-[4rem_4rem]");
  wrapper.append(span1, span2);

  dailyProgressColumnAnimation(wrapper, (i || 1) * 200);

  progressBox.append(wrapper);
  return progressBox;
}
