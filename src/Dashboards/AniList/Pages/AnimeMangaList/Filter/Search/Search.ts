import HTML from "../../../../../../components/HTML/HTML";

export default function Search(containerBorderColor:string) {
  const styles  = "h-8 flex justify-center items-center gap-x-2"
  const search = HTML("div",styles)

  const styles2 = `w-8 p-1 h-full border-2 rounded-md hover:bg-pink-500 ${containerBorderColor}`
  const searchBtn = HTML('button',styles2)

  const styles3 = "invert opacity-90"
  const icon = HTML('img',styles3,"","",{src:"src/assets/magnifying-glass.svg"})
  searchBtn.append(icon)

  const styles4=`border-2 rounded-md pl-2 min-w-0 h-full text-pink-200 bg-transparent placeholder:text-pink-400/50 ${containerBorderColor}`
  const textInput = HTML("input",styles4,"","",{type:"text",placeholder:"Search"})

  search.append(searchBtn,textInput)
  return search
}


