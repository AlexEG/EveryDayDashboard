import HTML from "../../../../../components/HTML/HTML";
import ListTitle from "../../AnimeMangaList/Lists/ListTitle";
import AnimeManga from "./AnimeManga";
import Character from "./Character";

export default function GalleryComponet(
  type: "Anime" | "Manga" | "Characters",
  data: any
) {
  const styles = "mb-8 max-w-6xl mx-auto";
  const galleryComponet = HTML("section", styles);

  const styles2 =
    "border border-rose-600 rounded-lg p-4 flex flex-wrap justify-center gap-4";
  const listItemWrapper = HTML("div", styles2);

  if (type === "Anime")
    for (const anime of data)
      listItemWrapper.append(
        AnimeManga(
          anime.node.coverImage.large,
          "anime",
          anime.node.title.userPreferred
        )
      );

  if (type === "Manga")
    for (const manga of data)
      listItemWrapper.append(
        AnimeManga(
          manga.node.coverImage.large,
          "manga",
          manga.node.title.userPreferred
        )
      );

  if (type === "Characters")
    for (const character of data)
      listItemWrapper.append(
        Character(character.node.image.large, character.node.name.userPreferred)
      );

  galleryComponet.append(ListTitle(type, data.length), listItemWrapper);
  return galleryComponet;
}
