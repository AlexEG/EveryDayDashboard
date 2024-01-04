import HTML from "../../../../components/HTML/HTML";


export default function InfoBadge(badgeText: "Popularity" | "Average Score" | "Status" | "Genres" | "Episodes" | "Season") {
  let badgeStyles;

  if (badgeText === "Popularity")
    badgeStyles = ["bg-blue-900", "text-blue-100 bg-blue-700", "text-blue-400"]

  if (badgeText === "Average Score")
    badgeStyles = ["bg-purple-900", "text-purple-100 bg-purple-700", "text-purple-400"]

  if (badgeText === "Status")
    badgeStyles = ["bg-pink-900", "text-pink-100 bg-pink-700", "text-pink-400"]

  if (badgeText === "Genres")
    badgeStyles = ["bg-indigo-900", "text-indigo-100 bg-indigo-700", "text-indigo-400"]

  if (badgeText === "Episodes")
    badgeStyles = ["bg-sky-900", "text-sky-100 bg-sky-700", "text-sky-400"]

  if (badgeText === "Season")
    badgeStyles = ["bg-teal-900", "text-teal-100 bg-teal-700", "text-teal-400"]



  const styles = `w-fit h-fit rounded-lg font-medium text-xs flex justify-center items-center gap-x-1 ${badgeStyles[0]}`
  const badgeContainer = HTML("div", styles)

  const styles2 = `rounded-lg px-[6px] py-1 ${badgeStyles[1]}`
  const span1 = HTML("span", styles2, `anilist--info-header--info-banner--${badgeText.toLowerCase().replaceAll(" ", "-")}-badge`, "???")


  const styles3 = `pr-1 pl-0.5 py-1 ${badgeStyles[2]}`
  const span2 = HTML("span", styles3, "", badgeText)


  badgeContainer.append(span1, span2)
  return badgeContainer
}
