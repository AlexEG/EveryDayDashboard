export default function CloseSettingBtn() {
  return `<button
  id="settings-close-btn"
  class="absolute right-2 top-2 z-50 rounded-sm text-white transition-colors hover:bg-gray-200 hover:text-slate-950"
>
  <svg
    class="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="3"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</button>`;
}
