import HTML from "../../components/HTML/HTML";

export default function Badge(text: string) {
  const styles =
    "text-indigo-100 text-center text-sm px-3 py-px border-2 border-indigo-600 hover:text-indigo-600 transition-colors duration-300 hover:border-indigo-100 hover:bg-indigo-100 active:opacity-90";

  const badge = HTML("button", styles, "", text);
  return badge;
}
