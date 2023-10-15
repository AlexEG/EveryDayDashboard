import SettingsNavTab from "./SettingsNavTab";
import CloseSettingBtn from "./CloseSettingBtn";

export default function SettingsNavbar() {
  return `

  <div
      id="settingsNavBar"
      class="relative row-span-1 flex h-9 w-full bg-slate-900">


     <div class="flex">
     ${SettingsNavTab("Theme", true)}
     ${SettingsNavTab("TitleBar", false)}
     ${SettingsNavTab("Header status", false)}
     ${SettingsNavTab("Plugins", false)}
     ${SettingsNavTab("Backup/Restore", false)}

     </div>


    ${CloseSettingBtn()}
    </div>
  `;
}
