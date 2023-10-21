import HomeBtn from "./HomeBtn";
import SettingesBtn from "./SettingesBtn";

export default function Sidebar(): string {
  return `
  <aside class="absolute w-14 top-[31px] left-0 h-[calc(100%-31px)] bg-slate-950 text-white ">
  ${HomeBtn()}
  ${SettingesBtn()}



  <!--  Habits container  -->
  <div id="sidebar-habits-container" class="h-[calc(100%-196px)] flex flex-col flex-wrap"></div>
</aside>

<!-- {Add Calendar Input Container} [START] -->
<section
        id="add-calendar-input"
        class="w-full h-full top-0 left-0 fixed z-10 hidden"
      >
          <div class="w-full h-full">
          <!-- overly -->
          <div class="bg-black opacity-70 w-full h-full"></div>

          <div
            class="bg-slate-950 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-1/2 h-28 flex justify-center items-center">
            <!-- Close Add Calendar Input Container btn  -->
            <button
              id="close-add-new-calendar-btn"
              class="absolute right-2 top-2 z-50 rounded-sm text-white transition-colors hover:bg-gray-200 hover:text-slate-950"
            >
              <svg
                class="h-7 w-7"
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
            </button>

            <input
              class="bg-transparent border-indigo-600 border-2 rounded-md py-1 pl-2 focus-within:outline-none placeholder:opacity-30 focus-within:border-indigo-400 transition-colors text-white duration-300 w-60"
              type="text"
              placeholder="Calendar Title"
              value=""
            />
            <!-- SAVE btn  -->
            <button
              id="add-new-calendar-save-btn"
              class="text-indigo-100 text-center font-semibold px-4 py-1 border-2 rounded-md ml-3 border-indigo-600 hover:text-indigo-600 transition-colors duration-300 hover:border-indigo-100 hover:bg-indigo-100 active:opacity-90"
            >
              SAVE
            </button>
          </div>
        </div>
      </section>`;
}
