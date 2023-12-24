import AniList_API_Favourites from "../API/AniList_API_Favourites";

interface API_UserInfo {
  data: {
    User: {
      favourites: {
        characters: {
          edges: {
            node: { name: { userPreferred: string }; image: { large: string } };
          }[];
        };
      };
    };
  };
}

export default function downloadFavouriteCharacteresAvatars() {
  AniList_API_Favourites().then((data: API_UserInfo) => {
    console.log(`API DATA Favourite Characteres`, data);

    const characters = data.data.User.favourites.characters.edges;

    for (const character of characters) {
      const imgURL = character.node.image.large;
      const imgFileName = String(imgURL.match(/(?<=character\/large\/).*/g));
      const chaptersName = character.node.name.userPreferred;

      const LOG_CSS = [
        "background:black; color:#0f0 ; font-weight:900",
        "background:black; color:white",
        "background:black; color:#c7f",
      ];

      const logMessage = [
        `%c Download Complete %c Charactere Avatar %c ${chaptersName} `,
        ...LOG_CSS,
      ];
      window.DATA.downloadImg(
        imgURL,
        imgFileName,
        `dashboards/anilist/media/characters`,
        logMessage
      );
    }
  });
}
