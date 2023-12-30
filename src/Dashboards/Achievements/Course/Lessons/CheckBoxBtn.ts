import HTML from "../../../../components/HTML/HTML";
import updatePageProgress from "./updatePageProgress";

export default function CheckBoxBtn() {
  const div = HTML("div", "p-1");

  const styles =
    "relative accent-blue-600 w-5 h-5 cursor-pointer after:content-[attr(customtitle)] after:absolute after:-top-2 after:left-1/2 after:text-blue-200 after:z-50 after:bg-black after:px-2 after:py-0.5 after:-translate-y-full after:-translate-x-1/2 after:whitespace-nowrap after:invisible hover:after:visible after:rounded-sm ";

  const checkbox = HTML("input", styles, "", "", {
    type: "checkbox",
  });

  div.append(checkbox);
  // saveBtn.onclick = () => updatePageProgress(saveBtn);
  return div;
}
