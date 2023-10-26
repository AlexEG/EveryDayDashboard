import HTML from "../../../HTML/HTML";
import DeleteBtn from "./DeleteBtn";
import RenameBtn from "./RenameBtn";
import OrderBtn from "./OrderBtn";
import NameInput from "./NameInput";

export default function HabitComponent(
  name: string,
  habitNum: number,
  numberOfHabits: number,
  arr: string[]
) {
  const container = HTML("div", "flex gap-x-2");
  container.dataset.habitName = name;

  container.append(
    OrderBtn(habitNum, numberOfHabits, arr),
    NameInput(name),
    RenameBtn(),
    DeleteBtn()
  );
  return container;
}
