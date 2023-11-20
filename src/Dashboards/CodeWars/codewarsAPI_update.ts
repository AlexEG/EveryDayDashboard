export default async function codewarsAPI_update() {
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
    const dailyHonor = data["data"]["daily honor"];
    const lastDay: number[] = Object.entries(data["data"]["daily honor"]).slice(
      -1
    );

    // --- Update codewars.json --- //

    const todayName = new Date().toDateString();

    const todayHonor = lastDay[1] - Honor;

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
  });

  // --- console log --- //
  const profile = `\n-----------------------------------\n+ Rank/Score:  ${
    data.ranks.overall.name
  } / ${data.ranks.overall.score} / ${(
    (data.ranks.overall.score / 229) *
    100
  ).toFixed(1)}%\n+ Honor/Kata:  ${data.honor} / ${
    data.codeChallenges.totalCompleted
  }\n+ Leaderboard: #${data.leaderboardPosition
    .toString()
    .slice(0, 3)}_${data.leaderboardPosition.toString().slice(3)} / ${(
    (data.leaderboardPosition / 575_000) *
    100
  ).toFixed(3)}%\n-----------------------------------`;

  console.log(profile);

  const log = {
    Honor: Honor,
    Score: Score,
    Rank: Rank,
    "Leaderboard Position": LeaderboardPosition,
    "Total Completed Kata": TotalCompletedKata,
  };
  console.table(log);
}
