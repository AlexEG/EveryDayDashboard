export default async function codewarsAPI_update() {
  console.log(
    `%c Update %c CodeWars JSON `,
    "background:black; color:white",
    "background:black; color:#0f0; font-weight:900;"
  );

  const response = await fetch(
    "https://www.codewars.com/api/v1/users/6403ffa5f4a0b7ff71299207"
  );
  const data = await response.json();

  // --- GET API DATA --- //
  const Honor = data.honor;
  const Score = data.ranks.overall.score;
  const Rank = data.ranks.overall.rank;
  const TotalCompletedKata = data.codeChallenges.totalCompleted;
  const LeaderboardPosition = data.leaderboardPosition;

  // --- GET codewars.json DATA --- //

  const CodewarsDashboardDATA = new Promise((res, rej) => {
    res(JSON.parse(window.DATA.getJSONFileData("dashboards/codewars")));
  });

  CodewarsDashboardDATA.then((data) => {
    const todayName = new Date().toDateString();

    const dailyHonor = data["data"]["daily honor"];

    const dailyHonorArr = Object.entries(dailyHonor);

    const lastDay =
      dailyHonorArr[dailyHonorArr.length - 1][0] === todayName
        ? dailyHonorArr[dailyHonorArr.length - 2]
        : dailyHonorArr[dailyHonorArr.length - 1];

    const lastDayTotalHonor = lastDay[1][1];

    // --- Update codewars.json --- //

    const todayHonor = Honor - lastDayTotalHonor;

    console.log(
      `%c Today Honor %c ${todayHonor} `,
      "background:black; color:white",
      "background:black; color:#0f0; font-weight:900;"
    );

    dailyHonor[todayName] = [todayHonor || 0, Honor];

    const newCodewarsData = {
      Honor: Honor,
      Score: Score,
      Rank: Rank,
      "Leaderboard Position": LeaderboardPosition,
      "Honor Percentile": "Top 52.807%",
      "Total Completed Kata": TotalCompletedKata,
      "daily honor": dailyHonor,
    };

    window.DATA.editSettingsJSONFile_Value(
      "dashboards/codewars",
      "data",
      newCodewarsData
    );

    // --- console log --- //
    console.log(profile);
  });

  const profile = `\n-----------------------------------\n+ Rank/Score:  ${
    data.ranks.overall.name
  } / ${Score} / ${((Score / 229) * 100).toFixed(
    1
  )}%\n+ Honor/Kata:  ${Honor} / ${
    data.codeChallenges.totalCompleted
  }\n+ Leaderboard: #${LeaderboardPosition.toString().slice(
    0,
    3
  )}_${LeaderboardPosition.toString().slice(3)} / ${(
    (LeaderboardPosition / 575_000) *
    100
  ).toFixed(3)}%\n-----------------------------------`;
}
