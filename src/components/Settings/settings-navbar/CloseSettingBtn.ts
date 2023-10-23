import HTML from "../../HTML/HTML";
export default function CloseSettingBtn() {
  const closeBtn = HTML(
    "button",
    "group rounded-sm px-2 text-white transition-colors hover:bg-gray-200 hover:text-slate-950",
    "settings-close-btn"
  );

  const img = HTML("img", "w-5 h-5 invert group-hover:invert-0");
  img.setAttribute("src", "/src/assets/x-mark.svg");

  closeBtn.append(img);

  return closeBtn;
}
