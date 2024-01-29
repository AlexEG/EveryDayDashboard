import HTML from "../../../../components/HTML/HTML";
import DeleteBtn from "./DeleteBtn";
import RenameBtn from "./RenameBtn";
import OrderBtn from "./OrderBtn";
import NameInput from "./NameInput";

export default function HabitComponent(
  fileName: string,
  habitNum: number,
  numberOfHabits: number,
  arr: string[],
) {
  const container = HTML("div", "flex gap-x-2");
  container.dataset.habitName = fileName;

  container.append(
    OrderBtn(habitNum, numberOfHabits, arr),
    NameInput(fileName),
    RenameBtn(),
    DeleteBtn(),
  );
  return container;
}
