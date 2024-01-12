
type colors = "slate" | "neutral" | "red" | "orange" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "pink" | "rose"

export default function getThemeClassNameAndColorValue(builtInTheme: colors) {
  let themeClassName: string
  let themeColorValue: string

  switch (builtInTheme) {
    case "slate":
      themeClassName = "bg-slate-600"
      themeColorValue = "rgb(71 85 105)"
      break;
    case "neutral":
      themeClassName = "bg-neutral-600"
      themeColorValue = "rgb(82 82 82)"
      break;
    case "red":
      themeClassName = "bg-red-600"
      themeColorValue = "rgb(220 38 38)"
      break;
    case "orange":
      themeClassName = "bg-orange-600"
      themeColorValue = "rgb(234 88 12)"
      break;
    case "lime":
      themeClassName = "bg-lime-600"
      themeColorValue = "rgb(101 163 13)"
      break;
    case "green":
      themeClassName = "bg-green-600"
      themeColorValue = "rgb(22 163 74)"
      break;
    case "emerald":
      themeClassName = "bg-emerald-600"
      themeColorValue = "rgb(5 150 105)"
      break;
    case "teal":
      themeClassName = "bg-teal-600"
      themeColorValue = "rgb(13 148 136)"
      break;
    case "cyan":
      themeClassName = "bg-cyan-600"
      themeColorValue = "rgb(8 145 178)"
      break;
    case "sky":
      themeClassName = "bg-sky-600"
      themeColorValue = "rgb(2 132 199)"
      break;
    case "blue":
      themeClassName = "bg-blue-600"
      themeColorValue = "rgb(37 99 235)"
      break;
    case "indigo":
      themeClassName = "bg-indigo-600"
      themeColorValue = "rgb(79 70 229)"
      break;
    case "violet":
      themeClassName = "bg-violet-600"
      themeColorValue = "rgb(124 58 237)"
      break;
    case "purple":
      themeClassName = "bg-purple-600"
      themeColorValue = "rgb(147 51 234)"
      break;
    case "pink":
      themeClassName = "bg-pink-600"
      themeColorValue = "rgb(219 39 119)"
      break;
    case "rose":
      themeClassName = "bg-rose-600"
      themeColorValue = "rgb(225 29 72)"
      break;

    default:
      themeClassName = "bg-white"
      themeColorValue = "rgb(255 255 255)"
      break;
  }

  return { themeClassName, themeColorValue }
}
