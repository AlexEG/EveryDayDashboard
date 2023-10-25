import HTML from "../../../HTML/HTML";
import DeleteBtn from "./DeleteBtn";
import RenameBtn from "./RenameBtn";
import OrderBtn from "./OrderBtn";
import NameInput from "./NameInput";

export default function HabitComponent(
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
    RenameBtn(name),
    DeleteBtn(name)
  );
  return container;
}
