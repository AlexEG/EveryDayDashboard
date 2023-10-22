export default function HowOldAmI(year: number, month: number, day: number) {
  month--;
  const birth = new Date(year, month, day).getTime();
  const now = new Date().getTime();
  const old = now - birth;

  document.querySelector("#title-bar-how-old-am-i").textContent = `${Math.trunc(
    old / 8.64e7
  )}`;
}
