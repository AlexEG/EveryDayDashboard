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
    const date = new Date();

    const MONTHS = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const [dayOfWeek, , dayNum, year] = date.toDateString().split(" ");

    const thisMonthName = MONTHS[date.getMonth()];

    // console.log(dayOfWeek, thisMonthName, dayNum, year);

    const dailyHonor = data["data"]["daily honor"];
    const LastHonor = data["data"]["LastHonor"];
    const LasScore = data["data"]["LasScore"];

    // --- Update codewars.json --- //

    // const todayHonor = Honor - lastDayTotalHonor;
    // const todayScore = Score - lastDayTotalScore;

    // add new data to  year: { month: {day:[]} }
    dailyHonor[year] = { ...dailyHonor[year] };
    dailyHonor[year][thisMonthName] = { ...dailyHonor[year][[thisMonthName]] };

    dailyHonor[year][thisMonthName][`${dayOfWeek} ${dayNum}`] = {
      DailyHonor: Honor - LastHonor,
      DailyScore: Score - LasScore,
      TotalHonor: Honor,
      TotalScore: Score,
    };

    console.log(
      `%c Today Honor / Score  %c ${Honor - LastHonor}  ${Score - LasScore} `,
      "background:black; color:white",
      "background:black; color:#0f0; font-weight:900;"
    );

    // get the last honor & score
    // flat daily honor to one array of dayName:{...}
    // then just get the last item if today is added get the second to last item

    const allDaysArr = [];

    for (const year in data["data"]["daily honor"]) {
      for (const month in data["data"]["daily honor"][year]) {
        for (const day in data["data"]["daily honor"][year][month]) {
          const honor =
            data["data"]["daily honor"][year][month][day]["TotalHonor"];
          const score =
            data["data"]["daily honor"][year][month][day]["TotalScore"];

          allDaysArr.push(`${year} ${month} ${day} - ${honor} ${score}`);
        }
      }
    }
    // console.log(allDaysArr);
    //=> ['2023 November Wed 20 - 231 184', '2023 November Wed 21 - 220 170', '2023 November Wed 22 - 231 184']

    // now get the last day
    const todayYearMonthDay = `${year} ${thisMonthName} ${dayOfWeek} ${dayNum}`;
    const lastDay =
      allDaysArr[allDaysArr.length - 1].split("-")[0].trimEnd() ===
      todayYearMonthDay
        ? allDaysArr[allDaysArr.length - 2]
        : allDaysArr[allDaysArr.length - 1];

    const [newLastHonor, newLsatScore] = lastDay
      .split("-")[1]
      .trimStart()
      .split(" ");
    // console.log(newLastHonor, newLsatScore);

    const newCodewarsData = {
      Honor: Honor,
      Score: Score,
      LastHonor: +newLastHonor,
      LasScore: +newLsatScore,
      Rank: Rank,
      "Leaderboard Position": LeaderboardPosition,
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
