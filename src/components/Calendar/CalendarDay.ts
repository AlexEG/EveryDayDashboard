export default function CalendarDay(month: string, day: number): string {
  return `
<div id="${month}-${day}" class="flex justify-center items-end relative my-4 ">
  <button id="${month}-${day}" class="bg-gold w-14 h-14 hex flex justify-center items-center opacity-50 hover:opacity-100 transition duration-300 grayscale-[35%] hover:grayscale-0">
  <div class="hex bg-black w-[3.25rem] h-[3.25rem] flex justify-center items-center">
  <div class="hex bg-gold  w-12 h-12 flex justify-center items-center">
  <div class="hex bg-black w-11 h-11 flex justify-center items-center">
  <div class="hex bg-gold w-10 h-10 flex justify-center items-center pb-1">
  <span class="text-white font-semibold text-center text-xl transition duration-300">${day}</span>
  </div>
  </div>
  </div>
  </div>
  </button>
</div>
`;
}
