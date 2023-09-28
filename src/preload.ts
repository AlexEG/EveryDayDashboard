// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import fs from "fs";

Mkdir("./DATA");
Mkdir("./DATA/habits");

function createFile(pathFileName: string) {
  fs.appendFile(pathFileName, "", function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });
}

function Mkdir(path: string) {
  fs.access(path, (error) => {
    if (error) {
      fs.mkdir(path, (error) => {
        if (error) {
          console.log(error);
        }
      });
    }
  });
}

// ----------------------------------- //
import HabitBtn from "./components/Sidebar/HabitBtn";
import HabitBtnFunc from "./components/Sidebar/HabitBtnFunc";

window.addEventListener("DOMContentLoaded", () => {
  const [
    addNewHabitBtn,
    input,
    inputContainer,
    inputSaveBtn,
    sidebarHabitsContainer,
  ] = [
    document.querySelector("#add-new-habit-btn"),
    document.querySelector("section#add-calendar-input input"),
    document.querySelector("section#add-calendar-input"),
    document.querySelector("button#add-new-calendar-save-btn"),
    document.querySelector("div#sidebar-habits-container"),
  ];

  addNewHabitBtn.addEventListener("click", () => {
    inputContainer.classList.remove("hidden");
  });

  let TotalHabitNums = 1;
  inputSaveBtn.addEventListener("click", () => {
    sidebarHabitsContainer.innerHTML += HabitBtn(TotalHabitNums, input.value);

    inputContainer.classList.add("hidden");
    createFile(`./DATA/habits/habit_${input.value}.json`);
    input.value = "";
    TotalHabitNums++;
    HabitBtnFunc();
  });
});
