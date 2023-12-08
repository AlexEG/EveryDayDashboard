import HTML from "../../../components/HTML/HTML";
import SettingsFieldset from "../../../components/Settings/SettingsFieldset";
import { closeSettings } from "../helper";

export default function CreateNewHabit() {
  const mainContainer = SettingsFieldset(
    "Create New Habit",
    "settings--habit-tracker--create-new-habit"
  );
  const styles = "flex w-full gap-x-4";
  const container = HTML("div", styles);
  // --------

  const styles2 =
    "bg-transparent border-indigo-600 border-2 rounded-md py-px px-2 focus:outline-indigo-400 placeholder:opacity-30 transition-colors text-indigo-100 duration-300 w-full text-lg";

  const input = HTML("input", styles2, "", "", {
    type: "text",
    placeholder: "New Habit Name here",
  }) as HTMLInputElement;

  // --------

  const styles3 =
    "z-10 text-indigo-100 text-center font-semibold w-24 py-px border-2 rounded-md  border-indigo-600 hover:text-indigo-600 transition-colors duration-300 hover:border-indigo-100 hover:bg-indigo-100 active:opacity-90 bg-slate-950 focus:outline-indigo-400";

  const createBtn = HTML("button", styles3, "", "Create");

  createBtn.onclick = () => {
    const newHabitFileName = input.value.trim();
    window.DATA.createJSONHaFileHabit(newHabitFileName);

    input.value = "";

    closeSettings();

    const LOG_CSS = [
      "background:#000; color:#fff",
      "background:#000; color:#0f0",
      "background:#000; color:#fff",
    ];
    console.log(
      `%c Create New Habit File  <%c${newHabitFileName}%c> `,
      ...LOG_CSS
    );
  };

  // --------

  container.append(input, createBtn);
  mainContainer.append(container);
  return mainContainer;
}
