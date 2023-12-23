import HTML from "../../../components/HTML/HTML";

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
export default function HomeBanner() {
  const styles =
    "w-full h-72 relative rounded-lg overflow-hidden drop-shadow-[0_0_10px_rgb(225,29,72,0.5)]";
  const header = HTML("header", styles);

  // --------------- //
  const userInfoJSON = new Promise((res, rej) => {
    res(
      JSON.parse(
        window.DATA.getJSONFileData("dashboards/anilist/user-info-data")
      )
    );
  });

  userInfoJSON.then((data: API_UserInfo) => {
    console.log("API UserInfoData: ", data);

    const avatarURL = data.data.User.avatar.large;
    const bannerURL = data.data.User.bannerImage;

    const avatarImgFileName = String(
      avatarURL.match(/(?<=avatar\/large\/).*/g)
    );
    const bannerImgFileName = String(bannerURL.match(/(?<=banner\/).*/g));

    // console.log("avatarURL", avatarURL);
    // console.log("bannerURL", bannerURL);
    // console.log("bannerImgFileName", bannerImgFileName);
    // console.log("avatarImgFileName", avatarImgFileName);

    const bannerImg = HTML("img", "object-cover w-full h-full", "", "", {
      src: `/DATA/dashboards/anilist/media/user/${bannerImgFileName}`,
    });
    const styles2 =
      "w-full max-w-7xl h-20 absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-x-2 pl-2";
    const div = HTML("div", styles2);
    const avatarImg = HTML(
      "img",
      "w-20 h-20 drop-shadow-[0_0_2px_rgb(0,0,0,0.5)]",
      "",
      "",
      {
        src: `/DATA/dashboards/anilist/media/user/${avatarImgFileName}`,
      }
    );
    const styles3 =
      "text-white font-extrabold text-lg text-center flex items-center drop-shadow-[0_0_10px_rgb(0,0,0,1)]";
    const userName = HTML("span", styles3, "", "AlexEG");

    div.append(avatarImg, userName);
    header.append(bannerImg, div);
  });

  return header;
}
