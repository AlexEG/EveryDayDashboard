import HTML from "../../HTML/HTML";

export default function CloseSettingBtn() {
  const styles =
    "group rounded-sm px-2 text-white transition-colors hover:bg-gray-200 hover:text-slate-950";
  const closeBtn = HTML("button", styles, "settings-close-btn");

  const styles2 = "w-5 h-5 invert group-hover:invert-0";
  const img = HTML("img", styles2, "", "", { src: "/src/assets/x-mark.svg" });

  closeBtn.append(img);

  closeBtn.onclick = () => {
    document.querySelector("div#settings-box").classList.add("hidden");
  };
  return closeBtn;
}
