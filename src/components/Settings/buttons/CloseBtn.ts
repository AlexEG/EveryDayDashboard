import HTML from "../../HTML/HTML";

export default function CloseBtn(additionalStyles?: string) {
  const styles =
    "group rounded-sm p-1 transition-colors hover:bg-gray-200 " +
    additionalStyles;
  const closeBtn = HTML("button", styles);

  const styles2 = "w-5 h-5 invert group-hover:invert-0";
  const img = HTML("img", styles2, "", "", { src: "/src/assets/x-mark.svg" });

  closeBtn.append(img);

  return closeBtn;
}
