import SettingsNavbar from "./settings-navbar/SettingsNavbar";
import SettingsTheme from "./settings-theme/SettingsTheme";
export default function Settings() {
  return `
  <div id="settings" class="fixed top-0 z-40 h-full w-full hidden">
  <!-- Overlay / bg mask -->
  <div class=" h-[calc(100%-31px)] w-full bg-black opacity-80 rounded-b-3xl mt-[31px]"></div>
  <!-- Settinges Box -->
  <div
    class="fixed left-1/2 top-1/2 h-96 w-[40rem] -translate-x-1/2 -translate-y-1/2  rounded-sm bg-slate-950">
  
    ${SettingsNavbar()}
    ${SettingsTheme()}
    

    <!-- Settinges Box END -->
  </div>
</div>`;
}
