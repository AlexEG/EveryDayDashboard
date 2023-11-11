export default function TitleBarClock(): void {
  const date: Date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();

  let session = "AM";
  function updateTime() {
    // console.log(h);
    if (hours === 24) hours = 0;
    if (minutes === 59) {
      hours++;
      minutes = 0;
    } else minutes++;

    document
      .querySelector("#title-bar-clock")
      .setAttribute("datetime", `${hours}:${minutes}`);

    let [h, m] = [hours, minutes];

    if (h === 12) session = "PM";
    if (h === 0) {
      h = 12;
      session = "AM";
    }

    if (h > 12) {
      h = h - 12;
    }
    h = h < 10 ? +"0" + h : h;
    m = m < 10 ? +"0" + m : m;

    const time = m < 10 ? `${h}:0${m}` : `${h}:${m}`;

    document.querySelector("#title-bar-clock").textContent = time;
    document.querySelector("#title-bar-session").textContent = session;
  }
  updateTime();
  setInterval(updateTime, 60_000);
}
