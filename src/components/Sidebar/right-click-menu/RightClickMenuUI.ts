export default function RightClickMenuUI(Title: string) {
  return `<div class="sidebar-habit-right-click-menu z-50 invisible absolute left-14 w-52 h-full top-0 bg-slate-950  flex flex-col justify-between rounded-r-md px-px">
   
    
  <input
    class="bg-transparent border-indigo-600 border-2 rounded-md py-px px-1 focus-within:outline-none placeholder:opacity-30 focus-within:border-indigo-400 transition-colors text-white duration-300 w-full text-base "
    type="text"
    placeholder="Habit Title"
    value="${Title}"/>



  <div class="flex justify-between text-xs p-px">
    <div class="text-xs ">
       <span class="text-indigo-300">Order</span>
      <select value="" class="sidebar-change-order text-indigo-600 bg-slate-950">

      </select>
    </div>
    <button class="sidebar-rename-habit-save-btn z-10 text-indigo-100 text-center font-semibold px-1 py-px border-2 rounded-md  border-indigo-600 hover:text-indigo-600 transition-colors duration-300 hover:border-indigo-100 hover:bg-indigo-100 active:opacity-90 bg-slate-950">
          SAVE
        </button>
    <button class="sidebar-delete-habit z-10 text-red-100 text-center font-semibold px-1 py-px border-2 rounded-md  border-red-600 hover:text-red-600 transition-colors duration-300 hover:border-red-100 hover:bg-red-100 active:opacity-90 bg-slate-950">
          DELETE
        </button>
  
  </div>


</div>`;
}
