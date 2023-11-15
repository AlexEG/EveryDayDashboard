import HTML from "../../HTML/HTML";

export default function ExpandBtn() {
  const styles =
    "group rounded-sm px-2 text-white transition-colors hover:bg-gray-200 hover:text-slate-950";
  const maximizeBtn = HTML("button", styles, "settings-close-btn");

  const styles2 = "w-5 h-5 invert group-hover:invert-0";
  const img = HTML("img", styles2, "", "", { src: "/src/assets/expand.svg" });

  maximizeBtn.append(img);
  return maximizeBtn;
}
