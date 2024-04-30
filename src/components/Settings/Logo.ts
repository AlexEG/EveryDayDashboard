import HTML from "../HTML/HTML";

export default function Logo(svgName: string) {
  const styles = "w-10 h-10 flex items-center justify-center";
  const Logo = HTML("div", styles);

  const styles2 = "w-7 invert";
  const img = HTML("img", styles2, "", "", {
    src: `../../../src/assets/${svgName}.svg`,
  });
  Logo.append(img);

  return Logo;
}
