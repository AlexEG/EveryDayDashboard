export default function HabitTrackerSettingsDATA() {
  return new Promise((res, rej) => {
    res(JSON.parse(window.DATA.getJSONFileData("settings/habit-tracker")));
  });
}
