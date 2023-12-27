import HTML from "../../../components/HTML/HTML";

export default function ProgressBar() {
  const styles = "h-5 w-44 border border-cyan-500";
  const ProgressBar = HTML("div", styles);

  const PROGRESS_NUM = 46;

  const styles2 =
    "bg-cyan-600 h-full text-cyan-950 font-medium text-sm text-center leading-4";
  const YourProgress = HTML("div", styles2, "", String(PROGRESS_NUM));

  YourProgress.style.width = `${String(PROGRESS_NUM)}%`;

  ProgressBar.append(YourProgress);
  return ProgressBar;
}
