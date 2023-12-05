import HTML from "../../../../../components/HTML/HTML";

export default function HabitCheckbox(
  highlightToday: boolean,
  isChecked: boolean,
  habitName: string,
  dayNum: number,
  habitGroupColor: string
) {
  const highlight =
    highlightToday &&
    "border-y  relative after:absolute after:top-0 after:-right-0.5 after:bottom-0 after:w-0.5 after:bg-black ";
  const styles =
    "w-10 h-10 flex justify-center items-center border-y-blue-600 bg-black " +
    highlight;

  const cell = HTML("div", styles);
  cell.dataset.dayNum = String(dayNum);

  const highlightTodayCSS = highlightToday ? "opacity-100" : "opacity-50";
  const styles2 =
    "relative accent-blue-600 w-5 h-5 cursor-pointer after:content-[attr(customtitle)] after:absolute after:-top-2 after:left-1/2 after:text-blue-200 after:z-50 after:bg-black after:px-2 after:py-0.5 after:-translate-y-full after:-translate-x-1/2 after:whitespace-nowrap after:invisible hover:after:visible after:rounded-sm " +
    highlightTodayCSS;

  const checkbox = HTML("input", styles2, "", "", {
    type: "checkbox",
    customtitle: habitName,
  });
  checkbox.style.accentColor = habitGroupColor;
  if (isChecked) {
    checkbox.setAttribute("checked", "");
  }

  cell.append(checkbox);
  return cell;
}
