import HTML from "../../../HTML/HTML";

export default function DeleteBtn() {
  const deleteBtn = HTML(
    "button",
    "group z-10 text-red-100 text-center font-semibold px-1 py-px border-2 rounded-md border-red-600 transition-colors duration-300 hover:border-red-600 hover:bg-red-600 active:opacity-80"
  );

  const img = HTML(
    "img",
    "w-5 h-5 invert group-hover:invert-0 transition duration-300"
  );
  img.setAttribute("src", "/src/assets/delete.svg");

  deleteBtn.append(img);

  deleteBtn.onclick = () => {
    const Name = deleteBtn.parentElement.dataset.habitName;
    window.HabitsData.deleteJSONFile(`habits/${Name}`);
    deleteBtn.parentElement.remove();

    console.log("DELETE |", Name);
    console.log(
      `%c DELETE %c ${Name} `,
      "background:black; color:white",
      "color:red"
    );
  };

  return deleteBtn;
}