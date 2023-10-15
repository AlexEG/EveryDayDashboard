export default function TitleBarClock(): void {
  const date: Date = new Date();

  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  document
    .querySelector("#title-bar-clock")
    .setAttribute("datetime", `${h}:${m}`);
  let session = "AM";
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = h < 10 ? +"0" + h : h;
  m = m < 10 ? +"0" + m : m;

  const time = m < 10 ? `${h}:0${m}` : `${h}:${m}`;

  document.querySelector("#title-bar-clock").textContent = time;
  document.querySelector("#title-bar-session").textContent = session;

  // console.log(time);
}
