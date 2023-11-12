import HTML from "../components/HTML/HTML";
import { closeSettingsAnimation } from "../components/Sidebar/settingsAnimation";

export default function CloseBtn() {
  const styles =
    "group rounded-sm p-1 transition-colors hover:bg-gray-200 absolute top-1 right-1";
  const closeBtn = HTML("button", styles);

  const styles2 = "w-5 h-5 invert group-hover:invert-0";
  const img = HTML("img", styles2, "", "", { src: "/src/assets/x-mark.svg" });
  closeBtn.append(img);

  closeBtn.onclick = () => {
    // 1. run the animation
    closeSettingsAnimation();
    // 2. remove highlight from 'open settings btn'
    const OpenSettingsBtn = document.querySelector(
      "#settings-open-btn"
    ) as HTMLButtonElement;
    OpenSettingsBtn.classList.remove("bg-slate-200");
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

    openedDashboardBtn.classList.add("bg-slate-200");
    openedDashboardBtn.firstElementChild.classList.remove("invert");
    openedDashboardBtn.firstElementChild.classList.replace(
      "opacity-70",
      "opacity-100"
    );
  };

  return closeBtn;
}
