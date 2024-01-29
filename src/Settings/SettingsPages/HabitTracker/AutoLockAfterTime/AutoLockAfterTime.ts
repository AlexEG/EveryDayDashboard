import SettingsFieldset from "../../../../components/Settings/SettingsFieldset";
import AutoLockComponent from "./AutoLockComponent";

export default function AutoLockAfterTime(
  fileNameArr: string[],
  habitNameArr: string[],
  HabitsAutoLockAfterTimeArr: (string | undefined)[],
) {
  const container = SettingsFieldset(
    "AutoLock After Time",
    "settings--habit-tracker--auto-lock-after-time",
  );

  for (let i = 0; i < habitNameArr.length; i++) {
    container.append(
      AutoLockComponent(
        i + 1,
        habitNameArr[i],
        HabitsAutoLockAfterTimeArr[i],
        fileNameArr[i],
      ),
    );
  }

  return container;
}
