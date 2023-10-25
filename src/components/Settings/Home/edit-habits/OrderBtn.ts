import HTML from "../../../HTML/HTML";

export default function OrderBtn(
  habitNum: number,
  numberOfHabits: number,
  arr: string[]
) {
  const selectContainer = HTML("div", "text-xs pt-1");

  const select = HTML(
    "select",
    "sidebar-change-order text-indigo-600 bg-slate-950 focus:outline-indigo-400"
  );

  select.setAttribute("value", `${habitNum + 1}`);

  for (let i = 0; i < numberOfHabits; i++) {
    const option = HTML("option", "", "", `${i + 1}`);
    option.setAttribute("value", `${i + 1}`);

    if (i === +habitNum) {
      option.setAttribute("selected", "");
    }

    select.append(option);
  }
  // --------------------------

  select.onchange = () => {
    const value1 =
      select.parentElement.parentElement.dataset.habitName.split("_")[1];
    const value2 = select.value;

    const fileName1 = arr[arr.indexOf(arr[habitNum])];
    const fileName2 = arr[value2 - 1];

    //* change UI
    const container1 = select.parentElement.parentElement;
    const container2 = document.querySelector(
      `#settings--home--edit-habits div[data-habit-name="${fileName2}"]`
    ) as HTMLDivElement;

    // switch dataset
    container1.dataset.habitName = fileName2;
    container2.dataset.habitName = fileName1;

    // switch input values
    const input1 = container1.querySelector("input");
    const input2 = container2.querySelector("input");

    const inputValue1 = input1.getAttribute("value");
    const inputValue2 = input2.getAttribute("value");

    input1.setAttribute("value", inputValue2);
    input2.setAttribute("value", inputValue1);

    // change contaner1 select

    container1
      .querySelector("select option[selected]")
      .removeAttribute("selected");
    container1
      .querySelector(`option[value="${value1}"]`)
      .setAttribute("selected", "");

    // console.log(container1);
    // console.log(container2);

    //* switch JSON
    const name1 = fileName1.split("_").with(1, value2).join("_");
    const oldFilePaht1 = `habits/${fileName1}`;
    const newFilePaht1 = `habits/${name1}`;

    // console.log(oldFilePaht1);
    // console.log(newFilePaht1);

    container1.dataset.habitName = name1;
    window.HabitsData.renameJSONFile(oldFilePaht1, newFilePaht1);

    const name2 = fileName2.split("_").with(1, value1).join("_");
    const oldFilePaht2 = `habits/${fileName2}`;
    const newFilePaht2 = `habits/${name2}`;

    // console.log(oldFilePaht2);
    // console.log(newFilePaht2);

    container2.dataset.habitName = name2;
    window.HabitsData.renameJSONFile(oldFilePaht2, newFilePaht2);

    console.log(
      `%c Change Order %c\n ${oldFilePaht1.split("/")[1]} %c=> %c${
        newFilePaht1.split("/")[1]
      } %c\n ${oldFilePaht2.split("/")[1]} %c=> %c${
        newFilePaht2.split("/")[1]
      }`,
      "background:black; color:white",
      "color:red",
      "",
      "color:green",
      "color:red",
      "",
      "color:green"
    );
  };

  // --------------------------
  selectContainer.append(select);
  return selectContainer;
}

// TODO it's working for the first change after that it's not
