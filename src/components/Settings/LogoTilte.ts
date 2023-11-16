import HTML from "../HTML/HTML";

export default function LogoTilte(dashboardName: string) {
  const styles2 = "w-40 h-10 flex items-center text-left pl-2";
  const LogoTitle = HTML("div", styles2);

  const styles3 = "text-neutral-300 whitespace-nowrap truncate";
  const p = HTML("p", styles3, "", dashboardName);
  LogoTitle.append(p);

  return LogoTitle;
}
