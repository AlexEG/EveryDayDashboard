import HTML from "../../../components/HTML/HTML";

export default function NavLink(text: string, isOpen: boolean) {
  const highlight = isOpen
    ? "text-rose-600 border-rose-100 bg-rose-100"
    : "text-rose-100 hover:text-rose-600 border-rose-600 hover:border-rose-100 hover:bg-rose-100 active:opacity-90";

  const styles = `text-center font-semibold px-3 py-px border rounded-md transition-colors duration-300 whitespace-nowrap ${highlight}`;

  const navLink = HTML("button", styles, "", text);

  return navLink;
}
