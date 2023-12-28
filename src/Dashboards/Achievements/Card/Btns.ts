import HTML from "../../../components/HTML/HTML";

export default function Btns() {
  const styles = "w-full h-full grid place-content-center";
  const buts = HTML("div", styles);

  const styles2 =
    "group border border-rose-600 rounded-lg w-12 h-12 grid place-content-center hover:border-rose-300 hover:bg-rose-300 ";
  const addInput = HTML("button", styles2);
  const img1 = HTML("img", "invert w-6 h-6", "", "", {
    src: "/src/assets/plus.svg",
  });
  addInput.append(img1);

  const styles3 =
    "border border-rose-600 rounded-lg w-full h-6 grid place-content-center";
  const expand = HTML("button", styles2);
  const img2 = HTML("img", "invert w-6 h-6 group-hover:invert-0", "", "", {
    src: "/src/assets/arrow-down.svg",
  });
  expand.append(img2);

  buts.append(expand);
  return buts;
}
