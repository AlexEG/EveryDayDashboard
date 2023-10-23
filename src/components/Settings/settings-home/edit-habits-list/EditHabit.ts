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

  const habitTitle = name.split("_").slice(2).join(" ");

  container.dataset.habitNumber = `${habitNum + 1}`;
  container.dataset.habitName = habitTitle;

  container.append(
    OrderBtn(habitNum, numberOfHabits),
    NameInput(habitTitle),
    RenameBtn(),
    DeleteBtn()
  );
  return container;
}
