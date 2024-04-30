export default function HabitTrackerSVG() {
  const styles =
    "h-6 w-6 invert group-hover:invert-0 opacity-70 group-hover:opacity-100 transition duration-200";
  // Create the main SVG element
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("height", "800px");
  svg.setAttribute("width", "800px");
  svg.setAttribute("viewBox", "0 0 512 512");
  svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
  svg.setAttribute("xml:space", "preserve");
  svg.setAttribute("class", styles);

  // Create the style element

  // Create the first polygon element
  const polygon1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon",
  );
  polygon1.setAttribute(
    "points",
    "335.644,414.285 53.466,414.285 53.466,132.107 291.098,132.107 344.564,78.64 0,78.64 0,467.751 389.106,467.751 389.106,441.018 389.106,323.746 335.644,377.213",
  );

  // Create the second polygon element
  const polygon2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon",
  );
  polygon2.setAttribute(
    "points",
    "158.903,163.312 103.914,218.311 193.434,307.822 248.423,362.82 303.412,307.822 512,99.247 457.002,44.249 248.431,252.823",
  );

  // Append the style and polygons to the SVG
  svg.append(polygon1, polygon2);

  return svg;
}
