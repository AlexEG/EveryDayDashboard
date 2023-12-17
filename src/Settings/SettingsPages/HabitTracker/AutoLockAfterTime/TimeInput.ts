import HTML from "../../../../components/HTML/HTML";

export default function TimeInput(value: string, callback: any) {
  const highlight = value ? " cursor-pointer" : " cursor-not-allowed";
  const styles =
    "bg-neutral-800 px-4 text-white/95 rounded-sm ml-auto mr-44" + highlight;
  const timeInput = HTML("input", styles, "", "", {
    type: "time",
    value: value,
  });
  timeInput.onchange = () => callback(timeInput);
  return timeInput;
}
