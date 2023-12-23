import AniList_API_UserInfo from "../API/AniList_API_UserInfo";

export default function updateUserInfoData() {
  AniList_API_UserInfo().then((data) => {
    console.log("API UserInfoData: ", data);

    window.DATA.CreateOrUpdateJSON(
      "dashboards/anilist/user-info-data.json",
      data
    );
  });
}
