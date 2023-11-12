import HTML from "../../components/HTML/HTML";

export default function BlockTitle(title: string) {
  const styles =
    "text-base text-neutral-400 font-medium pb-2 first-of-type:pt-0 pt-8 ";
  const h2 = HTML("h2", styles, "", title);
  return h2;
}
