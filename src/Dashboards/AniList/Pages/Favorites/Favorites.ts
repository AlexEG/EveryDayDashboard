import HTML from "../../../../components/HTML/HTML";
import GalleryComponet from "./GalleryComponet/GalleryComponet";

interface favoritesDataJSON {
  data: {
    User: {
      favourites: {
        anime: {
          edges: [
            {
              node: {
                id: number;
                type: "ANIME";
                status: string;
                format: string;
                bannerImage: string;
                title: { userPreferred: string };
                coverImage: {
                  large: string;
                };
                startDate: { year: number };
              };
            }
          ];
        };
        manga: any;
        characters: any;
      };
    };
  };
}
export default function Favorites() {
  const styles = "px-8";

  const favorites = HTML("section", styles, "anilist--favorites");

  const favoritesDataJSON = new Promise((res, rej) => {
    res(
      JSON.parse(
        window.DATA.getJSONFileData("dashboards/anilist/favourites-data")
      )
    );
  });

  favoritesDataJSON.then((data: favoritesDataJSON) => {
    // console.log("favoritesDataJSON", data);

    favorites.append(
      GalleryComponet("Anime", data.data.User.favourites.anime.edges),
      GalleryComponet("Manga", data.data.User.favourites.manga.edges),
      GalleryComponet("Characters", data.data.User.favourites.characters.edges)
    );
  });
  return favorites;
}
