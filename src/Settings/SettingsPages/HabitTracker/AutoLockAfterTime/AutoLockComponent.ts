import HTML from "../../../../components/HTML/HTML";
import ToggleBtn from "../../../../components/Settings/buttons/ToggleBtn";
import HabitNameNumberWrapper from "./HabitNameNumberWrapper";
import toggleAutoLockForHaibt from "./toggleAutoLockForHaibt";
import TimeInput from "./TimeInput";

export default function AutoLockComponent(
  habitNum: number,
  habitName: string,
  habitAutoLockAfterTime: string | undefined,
  fileName: string
) {
  const highlight = habitAutoLockAfterTime ? "" : " opacity-50 ";

  const styles =
    "w-full rounded-lg border border-indigo-600 p-2 flex justify-between mb-1 transition-opacity" +
    highlight;
  const container = HTML("div", styles);

  function changeAutoLockAfterTimePropertyInHabitJSON(
    timeInput: HTMLInputElement
  ) {
    const timeValue = timeInput.value;
    timeInput.setAttribute("value", timeValue);

    window.DATA.editSettingsJSONFile_Value(
      `dashboards/habit-tracker/${fileName}`,
      "data",
      timeValue,
      "metadata",
      "autoLockAfterTime"
    );

    console.log("fileName", fileName);
    console.log("timeValue", timeValue);
  }

  container.append(
    HabitNameNumberWrapper(habitNum, habitName),
    TimeInput(
      habitAutoLockAfterTime,
      changeAutoLockAfterTimePropertyInHabitJSON
    ),
    ToggleBtn(
      "Enable/Disable",
      `toggle-auto-lock-${habitName.toLowerCase().split(" ").join("-")}`,
      Boolean(habitAutoLockAfterTime),
      toggleAutoLockForHaibt
    )
  );
  return container;
}
