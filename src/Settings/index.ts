import HTML from "../components/HTML/HTML";

export default function Settings() {
  const styles =
    "bg-blue-950 fixed top-[32px] left-[57px] bottom-0 right-0 z-[999] invisible font-b";

  const settingsContainer = HTML("section", styles, "settings");
  settingsContainer.dataset.isSettingsOpen = "false";

  return settingsContainer;
}
