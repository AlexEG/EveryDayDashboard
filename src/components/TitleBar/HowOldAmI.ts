import HTML from "../HTML/HTML";

export default function HowOldAmI(birthday: number[], ageInDaysColor: string) {
  const [year, month, day] = birthday;

  const birth = new Date(year, month - 1, day).getTime();
  const now = new Date().getTime();
  const old = now - birth;

  const ageInDays = `${Math.trunc(old / 8.64e7)}`;

  const dateWrapper = HTML("div", "text-sm", "titlebar--age-in-days");
  const days = HTML(
    "span",
    "text-white/95",
    "title-bar-how-old-am-i",
    ageInDays
  );
  dateWrapper.append(days);

  if (ageInDaysColor) days.style.color = ageInDaysColor;

  return dateWrapper;
}
