import HTML from "../../../../HTML/HTML";

export default function NameInput(name: string) {
  const habitTitle = name.split("_").slice(2).join(" ");

  const input = HTML(
    "input",
    "bg-transparent border-indigo-600 border-2 rounded-md py-px px-1 focus-within:outline-none placeholder:opacity-30 focus-within:border-indigo-400 transition-colors text-white duration-300 w-full text-base"
  );
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Habit Title");
  input.setAttribute("value", habitTitle);

  return input;
}
