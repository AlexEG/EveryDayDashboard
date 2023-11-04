import HTML from "../HTML/HTML";
import SectionBtn from "./SectionBtn";
import SettingesBtn from "./SettingesBtn";

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
import FrontEndMentor from "../../Dashboards/FrontEndMentor/FrontEndMentor";
import FreeCodeCamp from "../../Dashboards/FreeCodeCamp/FreeCodeCamp";
import Firebase from "../../Dashboards/Firebase/Firebase";
import Vercel from "../../Dashboards/Vercel/Vercel";

export default function Sidebar() {
  const styles =
    "absolute w-14 top-[31px] left-0 h-[calc(100%-31px)] bg-slate-950 text-white ";
  const aside = HTML("aside", styles);

  const styles2 = "h-[calc(100%-56px)] overflow-y-auto";
  const innerDiv = HTML("div", styles2, "sidebar");

  innerDiv.append(
    SectionBtn("home", Home),
    SectionBtn("github", GitHub),
    SectionBtn("wakatime", WakaTime),
    SectionBtn("codewars", CodeWars),
    SectionBtn("leetcode", LeetCode),
    SectionBtn("cssbattle", CSSBattle),
    SectionBtn("tryhackme", TryHackMe),
    SectionBtn("monkeytype", MonkeyType),
    SectionBtn("youtube", YouTube),
    SectionBtn("spotify", Spotify),
    SectionBtn("anilist", AinList),
    SectionBtn("frontendmentor", FrontEndMentor),
    SectionBtn("freecodecamp", FreeCodeCamp),
    SectionBtn("firebase", Firebase),
    SectionBtn("vercel", Vercel)
  );

  innerDiv.children[0].classList.add("bg-slate-200");
  innerDiv.children[0].children[0].classList.remove("invert");

  aside.append(innerDiv);
  aside.append(SettingesBtn());
  return aside;
}
