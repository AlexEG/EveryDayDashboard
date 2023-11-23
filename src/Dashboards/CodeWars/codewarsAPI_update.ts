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

  console.log(data);
  // --- GET API DATA --- //
  const Honor = data.honor;
  const Score = data.ranks.overall.score;
  const Rank = data.ranks.overall.rank;
  const Languages = data.ranks.languages;
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

    const [, , dayNum, year] = date.toDateString().split(" ");

    const thisMonthName = MONTHS[date.getMonth()];

    // console.log(dayOfWeek, thisMonthName, dayNum, year);

    const dailyHonorScore = data["data"]["daily honor Score"];
    const LastHonor = data["data"]["LastHonor"];
    const LasScore = data["data"]["LasScore"];

    // --- Update codewars.json --- //

    // const todayHonor = Honor - lastDayTotalHonor;
    // const todayScore = Score - lastDayTotalScore;

    // add new data to  year: { month: {day:[]} }
    dailyHonorScore[year] = { ...dailyHonorScore[year] };
    dailyHonorScore[year][thisMonthName] = {
      ...dailyHonorScore[year][[thisMonthName]],
    };

    dailyHonorScore[year][thisMonthName][String(dayNum)] = {
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
    // flat daily honor Score to one array of dayName:{...}
    // then just get the last item if today is added get the second to last item

    const allDaysArr = [];

    for (const year in data["data"]["daily honor Score"]) {
      for (const month in data["data"]["daily honor Score"][year]) {
        for (const day in data["data"]["daily honor Score"][year][month]) {
          const honor =
            data["data"]["daily honor Score"][year][month][day]["TotalHonor"];
          const score =
            data["data"]["daily honor Score"][year][month][day]["TotalScore"];

          allDaysArr.push(`${year} ${month} ${day} - ${honor} ${score}`);
        }
      }
    }
    // console.log(allDaysArr);
    //=> ['2023 November 20 - 231 184', '2023 November 21 - 220 170', '2023 November 22 - 231 184']

    // now get the last day
    const todayYearMonthDay = `${year} ${thisMonthName} ${dayNum}`;
    const lastDay =
      allDaysArr[allDaysArr.length - 1].split("-")[0].trimEnd() ===
      todayYearMonthDay
        ? allDaysArr[allDaysArr.length - 2]
        : allDaysArr[allDaysArr.length - 1];

    // console.log(lastDay); //=> '2023 November 22 - 231 184'

    const [newLastHonor, newLsatScore] = lastDay
      .split("-")[1]
      .trimStart()
      .split(" ");
    // console.log(newLastHonor, newLsatScore);

    //* Languages Score [Start]
    const LanguagesScore = {};

    const [lastDayYear, lastDayMonth, lastDayDayNum] = lastDay
      .split("-")[0]
      .trimStart()
      .split(" ");
    // console.log(lastDayYear, lastDayMonth, lastDayDayNum);

    // DailyLangScore = lastday language TotalScore - today language totalScore

    for (const key in Languages) {
      const lastDayTotalLangScore =
        data["data"]["daily honor Score"][lastDayYear][lastDayMonth][
          lastDayDayNum
        ]["LanguagesScore"][key]["TotalLangScore"];

      // console.log(lastDayTotalLangScore);

      const DailyLangScore = Languages[key]["score"] - lastDayTotalLangScore;

      LanguagesScore[key] = {
        DailyLangScore: DailyLangScore,
        TotalLangScore: Languages[key]["score"],
      };
    }
    dailyHonorScore[year][thisMonthName][String(dayNum)]["LanguagesScore"] =
      LanguagesScore;

    //* Languages Score [End]

    const newCodewarsData = {
      Honor: Honor,
      Score: Score,
      LastHonor: +newLastHonor,
      LasScore: +newLsatScore,
      Rank: Rank,
      "Leaderboard Position": LeaderboardPosition,
      "Total Completed Kata": TotalCompletedKata,
      Languages: Languages,
      "daily honor Score": dailyHonorScore,
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
