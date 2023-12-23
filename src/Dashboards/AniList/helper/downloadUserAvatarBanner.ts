import AniList_API_UserInfo from "../API/AniList_API_UserInfo";

interface API_UserInfo {
  data: {
    User: {
      about: string | null;
      avatar: { large: string };
      bannerImage: string;
      name: string;
    };
  };
}

export default function downloadUserAvatarBanner() {
  AniList_API_UserInfo().then((data: API_UserInfo) => {
    console.log(`API DATA Banners`, data);

    const avatarURL = data.data.User.avatar.large;
    const bannerURL = data.data.User.bannerImage;

    const avatarImgFileName = String(
      avatarURL.match(/(?<=avatar\/large\/).*/g)
    );
    const bannerImgFileName = String(bannerURL.match(/(?<=banner\/).*/g));

    // log
    const LOG_CSS = [
      "background:black; color:#0f0 ; font-weight:900",
      "background:black; color:white",
    ];
    const logMessage1 = [`%c Download Complete %c User  Avatar `, ...LOG_CSS];
    const logMessage2 = [`%c Download Complete %c User  Banner `, ...LOG_CSS];

    window.DATA.downloadImg(
      avatarURL,
      avatarImgFileName,
      `dashboards/anilist/media/user`,
      logMessage1
    );

    window.DATA.downloadImg(
      bannerURL,
      bannerImgFileName,
      `dashboards/anilist/media/user`,
      logMessage2
    );
  });
}
