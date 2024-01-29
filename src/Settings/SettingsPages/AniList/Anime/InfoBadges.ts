import ToggleBtn from "../../../../components/Settings/buttons/ToggleBtn";
import SettingsFieldset from "../../../../components/Settings/SettingsFieldset";
import HTML from "../../../../components/HTML/HTML";

export default function InfoBadges() {
  const ID = "settings--anilist--anime--info-badges";
  const infoBadges = SettingsFieldset("Page Header Info Badges", ID);

  const wrapper = HTML("div", "grid grid-cols-3 w-full");

  // infoBanner

  const popularity = ToggleBtn("Popularity", ID + "--popularity", true, () =>
    console.log("popularity"),
  );
  const averageScore = ToggleBtn(
    "Average Score",
    ID + "--average-score",
    true,
    () => console.log("averageScore"),
  );
  const status = ToggleBtn("status", ID + "--status", true, () =>
    console.log("status"),
  );
  const episodes = ToggleBtn("episodes", ID + "--episodes", true, () =>
    console.log("episodes"),
  );
  const season = ToggleBtn("season", ID + "--season", true, () =>
    console.log("season"),
  );
  const source = ToggleBtn("source", ID + "--source", true, () =>
    console.log("source"),
  );
  const startDate = ToggleBtn("startDate", ID + "--start-date", true, () =>
    console.log("startDate"),
  );
  const endDate = ToggleBtn("endDate", ID + "--end-date", true, () =>
    console.log("endDate"),
  );
  const genres = ToggleBtn("genres", ID + "--genres", true, () =>
    console.log("genres"),
  );

  wrapper.append(
    popularity,
    averageScore,
    status,
    episodes,
    season,
    source,
    startDate,
    endDate,
    genres,
  );

  infoBadges.append(wrapper);
  return infoBadges;
}
