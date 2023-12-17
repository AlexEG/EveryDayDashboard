import HTML from "../../../../components/HTML/HTML";

export default function HabitNameNumberWrapper(
  habitNum: number,
  habitName: string
) {
  const styles2 = "bg-white/10 text-white/90 rounded-sm text-center w-6";
  const span1 = HTML("span", styles2, "", String(habitNum));

  const span2 = HTML("span", "whitespace-nowrap text-white/90", "", habitName);

  const habitNameNumberWrapper = HTML("div", "flex gap-x-2");
  habitNameNumberWrapper.append(span1, span2);

  return habitNameNumberWrapper;
}
