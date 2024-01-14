import HTML from "../../../components/HTML/HTML";

export default function NavLink(
  text: string,
  isOpen: boolean,
  navLinksTheme: {
    isOpenStyles: string;
    normal: string;
  }
) {
  const highlight = isOpen
    ? navLinksTheme.isOpenStyles || "text-black border-white bg-white"
    : navLinksTheme.normal ||
      "text-white hover:text-black border-white hover:border-white hover:bg-white";

  const styles = `nav-link text-center font-semibold px-3 py-px border rounded-md transition-colors duration-300 whitespace-nowrap ${highlight}`;

  const navLink = HTML("button", styles, "", text) as HTMLButtonElement;
  return navLink;
}
