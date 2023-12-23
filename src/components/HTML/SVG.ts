export default function SVG(classList: string, svgAttribute: any, paths: any) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  svg.setAttribute("class", classList);

  for (const key in svgAttribute) {
    svg.setAttribute(key, svgAttribute[key]);
  }

  for (const pathAttribute of paths) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    for (const key in pathAttribute) {
      path.setAttribute(key, pathAttribute[key]);
    }
    svg.append(path);
  }

  // console.count("SVG");
  return svg;
}
