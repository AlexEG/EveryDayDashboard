import HTML from "../../../../components/HTML/HTML";

export default function TimeInput(value: string, callback: any) {
  const highlight = value
    ? " cursor-pointer"
    : " after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0";
  const styles =
    "bg-neutral-800 px-4 text-white/95 rounded-sm ml-auto mr-44 relative " +
    highlight;
  const timeInput = HTML("input", styles, "", "", {
    type: "time",
    value: value ? value : "",
  });
  timeInput.onchange = () => callback(timeInput);
  return timeInput;
}
