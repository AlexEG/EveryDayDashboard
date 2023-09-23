export default function Headers() {
  return `
  <header class="w-[calc(100%-3.5rem)] ml-14 h-20 pt-2 bg-black overflow-hidden">

  <!-- Statistic -->
  <section class="flex justify-around">
    <!--* Longest Streak && Current Streak  -->

    <div>
      <span class="text-slate-200 font-semibold">Current Streak</span>
      <p class="text-center font-bold text-lg text-slate-100">5</p>
      <p
        class="text-center font-semibold text-xs text-slate-100 opacity-50"
      >
        May 1 - Today
      </p>
    </div>

    <div class="h-full flex justify-around">
      <div id="longest-streak">
        <span class="text-slate-200 font-semibold">Longest Streak</span>
        <p class="text-center font-bold text-lg text-slate-100">0</p>
        <p
          class="text-center font-semibold text-xs text-slate-100 opacity-50"
        >
          <span>??? 0</span>
          -
          <span>??? 0</span>
        </p>
      </div>
    </div>

    <!--* Marked VS Unmarked && Days Left -->
    <div id="marked-vs-unmarked" class="text-slate-200 text-center">
      <p class="text-slate-200 font-semibold">Marked VS Unmarked</p>

      <p>
        <span class="text-center font-bold text-lg text-green-800"
          >0%</span
        >
        |
        <span class="text-center font-bold text-lg text-red-800">0%</span>
      </p>

      <span
        class="text-center font-semibold text-xs text-slate-100 opacity-50"
        >0</span
      >
      |
      <span
        class="text-center font-semibold text-xs text-slate-100 opacity-50"
        >0</span
      >
    </div>

    <!-- how many days left -->
    <div id="days-left" class="text-slate-200 text-center">
      <p class="text-slate-200 font-semibold">Days Left</p>
      <p class="text-center font-bold text-lg text-slate-100">0%</p>
      <span
        class="text-center font-semibold text-xs text-slate-100 opacity-50"
        >0</span
      >
    </div>
  </section>
</header>`;
}
