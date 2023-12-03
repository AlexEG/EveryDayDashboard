import HTML from "../../../../../components/HTML/HTML";

export default function HabitCheckbox(highlightToday: boolean) {
  const highlight = highlightToday ? "opacity-100" : "opacity-50";

  const styles =
    "relative accent-blue-600 w-5 h-5 cursor-pointer after:content-[attr(customtitle)] after:absolute after:-top-2 after:left-1/2 after:text-blue-200 after:bg-blue-950 after:px-2 after:py-0.5 after:-translate-y-full after:-translate-x-1/2 after:whitespace-nowrap after:invisible hover:after:visible after:rounded-sm " +
    highlight;

  const checkbox = HTML("input", styles, "", "", {
    type: "checkbox",
    customtitle: "title",
  });

  const highlight2 = highlightToday && "bg-black";
  const styles2 = `w-10 h-10  border-blue-800 flex justify-center items-center border-t border-blue-800 ${highlight2}`;

  const div = HTML("div", styles2);
  div.append(checkbox);
  return div;
}
