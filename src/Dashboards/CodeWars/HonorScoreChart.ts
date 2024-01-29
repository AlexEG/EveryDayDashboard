import Chart from "chart.js/auto";
import HTML from "../../components/HTML/HTML";
import HonorScoreChartConfig from "./HonorScoreChartConfig";

export default function HonorScoreChart(year?: number, month?: number) {
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

  const thisMonthNum = month || date.getMonth();

  const SELECTED_YEAR = year || date.getFullYear();
  const SELECTED_MONTH = MONTHS[thisMonthNum];
  // console.log(SELECTED_MONTH); //=> November

  const numberOfDaysInThisMonth = new Date(
    SELECTED_YEAR,
    thisMonthNum - 1,
    0,
  ).getDate();

  // ---------------

  const styles =
    "w-full h-[800px] flex justify-center p-4 mt-4 bg-indigo-800/5";
  const chartContainer = HTML("section", styles, "codewars--codewars-chart");
  const styles2 = "border border-indigo-600/50";
  const chartCanvas = HTML("canvas", styles2) as HTMLCanvasElement;

  // ----------------

  const CodewarsDashboardDATA = new Promise((res, rej) => {
    res(JSON.parse(window.DATA.getJSONFileData("dashboards/codewars")));
  });

  // console.log(SELECTED_YEAR);
  CodewarsDashboardDATA.then((data) => {
    if (!data["data"]["daily honor Score"][SELECTED_YEAR]) {
      console.log(
        `%c CodeWars  Honor/Score Chart \n%c There is NO DATA for ${SELECTED_YEAR}`,
        "background:black; color:white",
        "background:black; color:#f00; font-weight:900;",
      );
      return;
    }
    if (!data["data"]["daily honor Score"][SELECTED_YEAR][SELECTED_MONTH]) {
      console.log(
        `%c CodeWars  Honor/Score Chart \n%c There is NO DATA for ${SELECTED_MONTH}`,
        "background:black; color:white",
        "background:black; color:#f00; font-weight:900;",
      );
      return;
    }

    const dailyHonorScore = data["data"]["daily honor Score"];
    const MonthData = dailyHonorScore[SELECTED_YEAR][SELECTED_MONTH];
    // console.log(MonthData);

    const labelsDays: string[] = [];
    const honorDataset: number[] = [];

    // for 30 Days view
    for (let i = 0; i < numberOfDaysInThisMonth; i++) {
      // X axis Labels
      const dayOfWeek = new Date(`${SELECTED_MONTH} ${i + 1}, ${SELECTED_YEAR}`)
        .toString()
        .slice(0, 4);

      const day = `${dayOfWeek} ${i + 1}`;
      // console.log(day);
      labelsDays.push(day);

      if (MonthData[String(i + 1)]) {
        // Honor Dataset
        honorDataset.push(MonthData[String(i + 1)]["DailyHonor"]);
      } else {
        honorDataset.push(null);
      }
    }

    // console.log(labelsDays, honorDataset);
    //* Languages Score START *//

    const LanguagesNames = Object.keys(data["data"]["Languages"]);
    const LanguagesMonthlyDailyLangScore = {};

    for (const langName of LanguagesNames) {
      LanguagesMonthlyDailyLangScore[langName] = [];
    }
    // console.log(LanguagesMonthlyDailyLangScore);
    // now we need arr with arrays of the values of DailyLangScore for the month so each array must be like 30 value and each array is indexed at the same index of lang name in "LanguagesNames"

    // data: [15, 23, 0, 4, 8] repeat the same value three time in the same day and stack them

    // 1. we have 3 datasets
    // 2. if data: [values] will repeat the day index for the 3 dataset
    // 3. but what if we make 3 dataset with 3 difrenet ( data: [values] )
    // 4. for "JS" give data: the month Array of JS only and so on
    // 5. so now we need to get each language array of dailyLangScore for the Month
    // 6. then store all of them in one big array
    // 7. then in config loop over the number of languages (3)
    // 8. make (3) datasets
    // 9. pass the bigArray[i] to each data:

    for (let i = 0; i < numberOfDaysInThisMonth; i++) {
      const languageScore =
        data["data"]["daily honor Score"][SELECTED_YEAR][SELECTED_MONTH][
          String(i + 1)
        ];
      // console.log("languageScore :", languageScore);

      if (languageScore) {
        const languagesObjForEveryDay = languageScore["LanguagesScore"];

        for (const lang in languagesObjForEveryDay) {
          const langScore = languagesObjForEveryDay[lang]["DailyLangScore"];
          // console.log(langScore);

          LanguagesMonthlyDailyLangScore[lang].push(langScore);
        }

        // console.log(languagesObjForEveryDay);
      } else {
        // now I need to fill the empty days with null
        for (const lang in LanguagesMonthlyDailyLangScore) {
          LanguagesMonthlyDailyLangScore[lang].push(null);
        }
      }
    }
    // console.log(LanguagesNames);
    // console.log("the BIG arr ", LanguagesMonthlyDailyLangScore);

    // now all I need to do is just convert the big arr (have objects in it) to array of array  then store then in array
    const LanguagesScoreBigArray = Object.values(
      LanguagesMonthlyDailyLangScore,
    );
    // console.log(LanguagesScoreBigArray);
    //* Languages Score END *//

    // get data from dashboard/codewars.json
    // console.log(scoreDataset);
    // ----------------
    (async function () {
      new Chart(
        chartCanvas,
        HonorScoreChartConfig(
          labelsDays,
          honorDataset,
          LanguagesNames,
          LanguagesScoreBigArray,
        ),
      );
    })();

    // ----------------
  });
  // ----------------

  chartContainer.append(chartCanvas);
  return chartContainer;
}
