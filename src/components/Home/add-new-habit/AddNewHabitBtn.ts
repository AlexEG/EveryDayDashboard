import HTML from "../../HTML/HTML";

export default function AddNewHabitBtn() {
  const styles =
    "group h-7 cursor-pointer items-center justify-center transition duration-300 hover:bg-neutral-200 flex border border-neutral-400 mt-2";
  const btn = HTML("button", styles, "add-new-habit-open-input");

  const img = HTML("img", "w-5 h-5 invert group-hover:invert-0");
  img.setAttribute("src", "/src/assets/plus.svg");
  btn.append(img);

  return btn;
}
