import HTML from "../../../components/HTML/HTML";

export default function Firebase() {
  const styles = "bg-yellow-500/50 w-[calc(100%-15rem)] h-full";
  const mainContainer = HTML("section", styles, "settings--firebase");
  const h1 = HTML(
    "h1",
    "text-center text-neutral-50 font-bold",
    "",
    "Firebase"
  );

  mainContainer.append(h1);
  return mainContainer;
}
