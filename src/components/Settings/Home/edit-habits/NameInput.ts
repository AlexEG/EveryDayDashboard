import HTML from "../../../HTML/HTML";

export default function NameInput(name: string) {
  const habitTitle = name.split("_").slice(2).join(" ");

  const styles =
    "relative w-full cursor-not-allowed after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0";
  const div = HTML("div", styles);

  const styles2 =
    "bg-transparent border-indigo-600 border-2 rounded-md py-px px-2 focus:outline-indigo-400 placeholder:opacity-30 transition-colors text-slate-700 duration-300 w-full text-base";
  const input = HTML("input", styles2, "", "", {
    type: "text",
    placeholder: "Habit Title",
    value: habitTitle,
  });

  div.append(input);
  return div;
}
