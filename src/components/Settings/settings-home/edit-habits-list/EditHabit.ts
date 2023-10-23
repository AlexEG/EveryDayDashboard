import HTML from "../../../HTML/HTML";
import DeleteBtn from "./btns/DeleteBtn";
import RenameBtn from "./btns/RenameBtn";
import OrderBtn from "./btns/OrderBtn";

export default function EditHabit() {
  const container = HTML("div", "flex gap-x-2");
  const input = HTML(
    "input",
    "bg-transparent border-indigo-600 border-2 rounded-md py-px px-1 focus-within:outline-none placeholder:opacity-30 focus-within:border-indigo-400 transition-colors text-white duration-300 w-full text-base"
  );
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Habit Title");
  input.setAttribute("value", "");

  container.append(OrderBtn(), input, RenameBtn(), DeleteBtn());
  return container;
}
