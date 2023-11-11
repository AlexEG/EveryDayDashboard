import HTML from "../../../components/HTML/HTML";

export default function AddNewHabitBtn() {
  const styles =
    "group h-7 cursor-pointer items-center justify-center transition duration-300 hover:bg-indigo-200 flex border border-indigo-400 mt-2";
  const btn = HTML("button", styles, "add-new-habit-open-input");

  const styles2 = "w-5 h-5 invert group-hover:invert-0";
  const img = HTML("img", styles2, "", "", { src: "/src/assets/plus.svg" });

  btn.onclick = () => {
    console.log("add new habit | Open input field");
    document.querySelector("div#add-calendar-input").classList.remove("hidden");
  };
  btn.append(img);
  return btn;
}
