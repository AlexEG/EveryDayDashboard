import HTML from "../../../HTML/HTML";
import DeleteBtn from "./btns/DeleteBtn";
import RenameBtn from "./btns/RenameBtn";
import OrderBtn from "./btns/OrderBtn";
import NameInput from "./btns/NameInput";

export default function EditHabit(
  name: string,
  habitNum: number,
  numberOfHabits: number
) {
  const container = HTML("div", "flex gap-x-2");

  container.append(
    OrderBtn(habitNum, numberOfHabits),
    NameInput(name),
    RenameBtn(),
    DeleteBtn()
  );
  return container;
}
