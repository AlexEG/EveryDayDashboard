import HTML from "../../../components/HTML/HTML";
import ProgressBox from "./ProgressBox";

export default function ProgressBar(
  progress: number,
  max: number,
  progressPercentage: number
) {
  const percentage = progressPercentage || Math.round((progress / max) * 100);

  const styles = " flex items-center gap-x-1";
  const wrapper = HTML("div", styles);

  const styles2 =
    "h-5 w-44 border group-odd:border-rose-500 group-even:border-blue-500";
  const ProgressBar = HTML("div", styles2);

  const styles3 =
    "group-odd:bg-rose-600 group-even:bg-blue-600 group-odd:text-rose-100 group-even:text-blue-100 font-semibold h-full text-sm text-center leading-4";
  const YourProgress = HTML(
    "div",
    styles3,
    "",
    percentage === 100 ? "Complete" : ""
  );

  YourProgress.style.width = `${String(percentage)}%`;

  ProgressBar.append(YourProgress);
  wrapper.append(ProgressBar, ProgressBox(percentage, progress, max));
  return wrapper;
}
