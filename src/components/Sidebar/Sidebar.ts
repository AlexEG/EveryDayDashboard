import HTML from "../HTML/HTML";
import SectionBtn from "./SectionBtn";
import SettingsBtn from "./SettingsBtn";
import SidebarrDATA from "../../Settings/SettingsPages/Sidebar/SidebarDATA";

import Home from "../../Dashboards/Home/Home";
import GitHub from "../../Dashboards/GitHub/GitHub";
import WakaTime from "../../Dashboards/WakaTime/WakaTime";
import CodeWars from "../../Dashboards/CodeWars/CodeWars";
import LeetCode from "../../Dashboards/LeetCode/LeetCode";
import CSSBattle from "../../Dashboards/CSSBattle/CSSBattle";
import TryHackMe from "../../Dashboards/TryHackMe/TryHackMe";
import MonkeyType from "../../Dashboards/MonkeyType/MonkeyType";
import YouTube from "../../Dashboards/YouTube/YouTube";
import Spotify from "../../Dashboards/Spotify/Spotify";
import AinList from "../../Dashboards/AniList/AinList";
import FrontendMentor from "../../Dashboards/FrontendMentor/FrontendMentor";
import FreeCodeCamp from "../../Dashboards/FreeCodeCamp/FreeCodeCamp";
import DEV from "../../Dashboards/DEV/DEV";
import Firebase from "../../Dashboards/Firebase/Firebase";
import Vercel from "../../Dashboards/Vercel/Vercel";

export default function Sidebar() {
  const styles =
    "absolute w-14 top-[31px] left-0 h-[calc(100%-31px)] bg-slate-950 text-white ";
  const aside = HTML("aside", styles);

  const styles2 = "h-[calc(100%-56px)] overflow-y-auto";
  const innerDiv = HTML("div", styles2, "sidebar");

  SidebarrDATA().then((data) => {
    const DashboardsData = data["ThemeAndDisplayAndOrder"];

    for (let i = 0; i < DashboardsData.length; i++) {
      const [svgName, , isDisplayed] = DashboardsData[i];

      if (isDisplayed) {
        const func =
          svgName === "home"
            ? Home
            : svgName === "github"
            ? GitHub
            : svgName === "wakatime"
            ? WakaTime
            : svgName === "codewars"
            ? CodeWars
            : svgName === "leetcode"
            ? LeetCode
            : svgName === "cssbattle"
            ? CSSBattle
            : svgName === "tryhackme"
            ? TryHackMe
            : svgName === "monkeytype"
            ? MonkeyType
            : svgName === "youtube"
            ? YouTube
            : svgName === "spotify"
            ? Spotify
            : svgName === "anilist"
            ? AinList
            : svgName === "frontendmentor"
            ? FrontendMentor
            : svgName === "freecodecamp"
            ? FreeCodeCamp
            : svgName === "devdotto"
            ? DEV
            : svgName === "firebase"
            ? Firebase
            : Vercel;

        innerDiv.append(SectionBtn(svgName, func));
      }
    }
    // innerDiv.children[0].classList.add("bg-slate-200");
    // innerDiv.children[0].children[0].classList.remove("invert");
    innerDiv.children[0].children[0].classList.add("hue-rotate-15");
  });

  aside.append(innerDiv);
  aside.append(SettingsBtn());
  return aside;
}
