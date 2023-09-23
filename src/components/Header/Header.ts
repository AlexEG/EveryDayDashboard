export default function Headers() {
  return `<header class="pl-14 bg-black">
  <!-- calendar title && clock && how old you in days  -->
  <div
    class="h-7 flex justify-center items-center bg-gradient-to-l from-transparent bg-slate-950 relative"
  >
    <span class="text-slate-50 font-semibold"
      >Solve one leetcode problem</span
    >
    <div class="absolute right-2 h-full flex items-center gap-3">
      <time datetime="00:00" class="text-slate-300 font-medium text-xs"
        >00:00 AM</time
      >
      <h3 class="text-slate-50 font-medium text-sm">DAY 0000</h3>
    </div>
  </div>

  <!-- Statistic -->
  <section class="py-2 h-20 flex justify-around">
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
