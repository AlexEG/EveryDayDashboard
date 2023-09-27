import HomeBtn from "./HomeBtn";
import SettingesBtn from "./SettingesBtn";
import AddNewHabitBtn from "./AddNewHabitBtn";

export default function Sidebar(): string {
  return `
  <aside class="absolute w-14 top-[31px] left-0 h-full bg-slate-950 text-white">
  ${HomeBtn()}
  ${SettingesBtn()}
  ${AddNewHabitBtn()}

  <div class="bg-slate-200 h-0.5"></div>

  <!--  Habits container  -->
  <div id="sidebar-habits-container" class="h-[calc(100%-336px)] w-full"></div>
</aside>`;
}
