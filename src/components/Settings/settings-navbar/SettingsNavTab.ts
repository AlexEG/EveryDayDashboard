export default function SettingsNavTab(tabTitle: string, isOpen: boolean) {
  const active = isOpen ? "before:bg-violet-600" : "";
  return `
  <section
        class="relative h-full cursor-pointer bg-slate-800 py-1 px-2 text-center text-white before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full ${active}"
      >
        ${tabTitle}
      </section>
  `;
}
