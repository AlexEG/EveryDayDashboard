import HTML from "../../../components/HTML/HTML";


export default function ScrollbarStyles(thumbColor: string) {
  const scrollbarStyles = HTML("style", "", "", `main#anilist::-webkit-scrollbar-thumb { background: ${thumbColor}; }`)

  return scrollbarStyles
}
