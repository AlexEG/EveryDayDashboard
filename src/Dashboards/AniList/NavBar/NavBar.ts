import HTML from "../../../components/HTML/HTML";
import FilterToggleBtn from "./FilterToggleBtn/FilterToggleBtn";
import GridListToggleLayoutBtns from "./GridListToggleLayoutBtns/GridListToggleLayoutBtns";
import NavLink from "./NavLink";
import removeRenderPage from "./removeRenderPage";
import toggleHighlight from "./toggleHighlight";

export default function NavBar(pageOpened: "Overview" | "Anime" | "Manga" | "Favorites" | "Stats", filterIsOpenByDefault: boolean) {
  const styles = " w-full max-w-6xl mx-auto my-6 h-12 relative pl-24 pr-32"
  const navbar = HTML("div", styles)

  const styles2 =
    "h-full w-full max-w-lg mx-auto border-2 border-rose-800 rounded-xl flex items-center justify-around overflow-hidden";
  const navBarLinksWrapper = HTML("nav", styles2);


  navBarLinksWrapper.append(
    NavLink("Overview", pageOpened === "Overview"),
    NavLink("Anime", pageOpened === "Anime"),
    NavLink("Manga", pageOpened === "Manga"),
    NavLink("Favorites", pageOpened === "Favorites"),
    NavLink("Stats", pageOpened === "Stats")
  );

  navBarLinksWrapper.addEventListener(
    "click",
    (e) =>
      e.target.tagName === "BUTTON" &&
      !e.target.classList.contains("text-rose-600") &&
      (toggleHighlight(e.target as HTMLButtonElement, navBarLinksWrapper),
        removeRenderPage(e.target as HTMLButtonElement))
  );
  navbar.append(FilterToggleBtn(filterIsOpenByDefault), navBarLinksWrapper, GridListToggleLayoutBtns())
  return navbar;
}
