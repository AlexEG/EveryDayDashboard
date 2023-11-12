import HTML from "../../../../components/HTML/HTML";

export default function DeleteBtn() {
  const styles =
    "group z-10 text-red-100 text-center font-semibold px-1 py-px border-2 rounded-md border-red-600 transition-colors duration-300 hover:border-red-600 hover:bg-red-600 active:opacity-80";
  const deleteBtn = HTML("button", styles);

  const styles2 = "w-5 h-5 invert group-hover:invert-0 transition duration-300";
  const img = HTML("img", styles2, "", "", { src: "/src/assets/delete.svg" });
  deleteBtn.append(img);

  deleteBtn.onclick = () => {
    const Name = deleteBtn.parentElement.dataset.habitName;
    window.DATA.deleteJSONFile(`habits/${Name}`);
    deleteBtn.parentElement.remove();

    console.log(
      `%c DELETE %c ${Name} `,
      "background:black; color:white",
      "background:black; color:#f00"
    );
  };

  return deleteBtn;
}
