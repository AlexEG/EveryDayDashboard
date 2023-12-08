import { closeSettingsAnimation } from "../../components/Sidebar/settingsAnimation";

export function closeSettings() {
  // 1. run the animation
  closeSettingsAnimation();
  // 2. remove highlight from 'open settings btn'
  const OpenSettingsBtn = document.querySelector(
    "#settings-open-btn"
  ) as HTMLButtonElement;
  OpenSettingsBtn.classList.remove("bg-white/90");
  OpenSettingsBtn.classList.add("hover:bg-white/80");
  OpenSettingsBtn.firstElementChild.classList.add("invert");
  OpenSettingsBtn.firstElementChild.classList.replace(
    "opacity-100",
    "opacity-70"
  );
  // 3. isSettingsOpen => 'false'  in 'settings' & 'open setting btn'
  OpenSettingsBtn.dataset.isSettingsOpen = "false";

  // 4. give back the highlight to the opened dashboard
  const dashboardName = document.querySelector("main").getAttribute("id");
  const openedDashboardBtn = document.querySelector(
    `aside div[title='${dashboardName}']`
  ) as HTMLDivElement;

  openedDashboardBtn.classList.add("bg-white/90");
  openedDashboardBtn.classList.remove("hover:bg-white/80");
  openedDashboardBtn.firstElementChild.classList.remove("invert");
  openedDashboardBtn.firstElementChild.classList.replace(
    "opacity-70",
    "opacity-100"
  );
}
