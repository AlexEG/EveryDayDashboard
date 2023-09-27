export default function CalendarMonthContainer(month: string): string {
  return `
  <!--* ${month.toUpperCase()} *-->
  <div id="month-${month}" class="group">
  <h2 class="text-gold2 opacity-50 font-semibold text-center mb-2 transition-opacity group-hover:opacity-80">
    ${month.slice(0, 3)}
  </h2>
  </div>
  `;
}
