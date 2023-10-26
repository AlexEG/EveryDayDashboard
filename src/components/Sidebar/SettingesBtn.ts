import HTML from "../HTML/HTML";

export default function SettingesBtn() {
  const styles =
    "group absolute bottom-0 right-0 w-14 flex h-14 cursor-pointer items-center justify-center transition duration-300 hover:bg-slate-200 hover:text-slate-950";
  const div = HTML("div", styles, "settings-open-btn");

  const img = HTML(
    "img",
    "h-6 w-6 invert group-hover:invert-0 transition duration-300"
  );
  img.setAttribute("src", "/src/assets/settings.svg");

  div.append(img);

  div.onclick = () => {
    document.querySelector("div#settings-box").classList.remove("hidden");
  };

  return div;
}
