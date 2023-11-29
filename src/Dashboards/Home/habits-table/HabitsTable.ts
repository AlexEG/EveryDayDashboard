import HTML from "../../../components/HTML/HTML";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import AllHabitsDATA from "./AllHabitsDATA";
import SettingsHomeDATA from "../SettingsHomeDATA";

export default function HabitsTable() {
  const styles = "h-full w-full relative";
  const tableContainer = HTML("section", styles);
  const table = HTML("table", "border border-neutral-200", "habits-table");

  SettingsHomeDATA().then((data) => {
    console.log(data);
    const habitsColors = data["data"]["habitsColor"];
    console.log(habitsColors);

    AllHabitsDATA().then((data) => {
      const habitsNames = Object.keys(data);
      table.append(TableHead(habitsNames), TableBody(data, habitsColors));
    });
  });

  tableContainer.append(table);
  return tableContainer;
}
