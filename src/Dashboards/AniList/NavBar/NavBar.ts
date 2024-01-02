import HTML from "../../../components/HTML/HTML";
import NavLink from "./NavLink";
import removeRenderPage from "./removeRenderPage";
import toggleHighlight from "./toggleHighlight";

export default function NavBar() {
  const styles =
    "w-full max-w-xl mx-auto my-4 h-12 border-2 border-rose-800 rounded-xl flex items-center justify-around overflow-x-auto";
  const navBar = HTML("nav", styles);

  navBar.append(
    NavLink("Overview", false),
    NavLink("Anime List", true),
    NavLink("Manga List", false),
    NavLink("Favorites", false),
    NavLink("Stats", false)
  );

  navBar.addEventListener(
    "click",
    (e) =>
      e.target.tagName === "BUTTON" &&
      !e.target.classList.contains("text-rose-600") &&
      (toggleHighlight(e.target as HTMLButtonElement, navBar),
        removeRenderPage(e.target as HTMLButtonElement))
  );
  return navBar;
}
