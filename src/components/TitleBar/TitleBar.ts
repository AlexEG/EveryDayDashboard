export default function TitleBar() {
  return `
  <div class="h-[31px] bg-black/50 select-none relative pl-14 flex items-center" style="-webkit-app-region: drag">
  <!-- Calendar Title && Clock && how old you in days  -->
    <span class="text-white/70 font-semibold drop-shadow-[0_0_10px_#000]">Solve one leetcode problem</span>
    <div class="absolute right-40 h-full flex items-center gap-3 text-white/50 font-medium drop-shadow-[0_0_10px_#000]">

    <div class="flex gap-1">
    <time id="title-bar-clock" datetime="00:00" class="text-xs text-white/95">00:00</time>
    <span class="text-xs" id="title-bar-session">AM</span>
    </div>
    
    <div class="text-sm">DAY <span id="title-bar-how-old-am-i" class="text-white/95">0000</span></div>
    </div>
  </div>`;
}
