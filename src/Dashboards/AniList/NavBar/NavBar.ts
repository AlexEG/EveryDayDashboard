import HTML from "../../../components/HTML/HTML";
import GridListToggleLayoutBtns from "./GridListToggleLayoutBtns/GridListToggleLayoutBtns";
import NavLink from "./NavLink";
import removeRenderPage from "./removeRenderPage";
import toggleHighlight from "./toggleHighlight";

export default function NavBar() {
  const styles = " w-full max-w-6xl mx-auto my-6 h-12 relative"
  const navbar = HTML("div", styles)

  const styles2 =
    "h-full w-full max-w-xl mx-auto border-2 border-rose-800 rounded-xl flex items-center justify-around overflow-x-auto";
  const navBarLinksWrapper = HTML("nav", styles2);


  navBarLinksWrapper.append(
    NavLink("Overview", false),
    NavLink("Anime List", false),
    NavLink("Manga List", true),
    NavLink("Favorites", false),
    NavLink("Stats", false)
  );

  navBarLinksWrapper.addEventListener(
    "click",
    (e) =>
      e.target.tagName === "BUTTON" &&
      !e.target.classList.contains("text-rose-600") &&
      (toggleHighlight(e.target as HTMLButtonElement, navBarLinksWrapper),
        removeRenderPage(e.target as HTMLButtonElement))
  );
  navbar.append(navBarLinksWrapper, GridListToggleLayoutBtns())
  return navbar;
}
