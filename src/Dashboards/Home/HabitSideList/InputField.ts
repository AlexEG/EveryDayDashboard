import HTML from "../../../components/HTML/HTML";

export default function InputField() {
  const container = HTML(
    "div",
    "w-full h-full top-0 left-0 fixed z-10 hidden",
    "add-calendar-input"
  );
  const container2 = HTML("div", "w-full h-full");
  const overly = HTML("div", "bg-black opacity-70 w-full h-full");

  const box = HTML(
    "div",
    "bg-slate-950 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-1/2 h-28 flex justify-center items-center"
  );

  // ---
  const styles =
    "group absolute right-2 top-2 z-50 rounded-sm text-white transition-colors hover:bg-gray-200 hover:text-slate-950";
  const closeBtn = HTML("button", styles, "close-add-new-calendar-btn");

  const img = HTML("img", "w-5 h-5 invert group-hover:invert-0", "", "", {
    src: "/src/assets/x-mark.svg",
  });
  closeBtn.append(img);

  closeBtn.onclick = () => {
    console.log("add new habit | close input field");
    document.querySelector("div#add-calendar-input").classList.add("hidden");
    input.value = "";
  };

  // ---
  const styles2 =
    "bg-transparent border-indigo-600 border-2 rounded-md py-1 pl-2 focus-within:outline-none placeholder:opacity-30 focus-within:border-indigo-400 transition-colors text-white duration-300 w-60";
  const input = HTML("input", styles2, "", "", {
    type: "text",
    placeholder: "Habit Name",
    value: "",
  });

  // ---
  const styles3 =
    "text-indigo-100 text-center font-semibold px-4 py-1 border-2 rounded-md ml-3 border-indigo-600 hover:text-indigo-600 transition-colors duration-300 hover:border-indigo-100 hover:bg-indigo-100 active:opacity-90";
  const saveBtn = HTML("button", styles3, "add-new-calendar-save-btn", "SAVE");

  saveBtn.onclick = () => {
    console.log("add new habit | Save input && create JSON");
    window.DATA.createJSONHaFileHabit(input.value.trim());
    container.classList.add("hidden");
    const habits = document.querySelector(
      "section#habits-names-nums div#habits-container-2"
    );
    const habit = HTML("div", "mb-0.5");
    const span1 = HTML(
      "span",
      "bg-neutral-300 text-neutral-950 px-1 rounded-sm",
      "",
      `${habits.childElementCount + 1}`
    );
    const span2 = HTML(
      "span",
      "pl-1 whitespace-nowrap",
      "",
      `${input.value.trim()}`
    );
    habit.append(span1, span2);

    habits.append(habit);
    input.value = "";
  };

  box.append(closeBtn, input, saveBtn);
  container2.append(overly, box);
  container.append(container2);
  return container;
}
