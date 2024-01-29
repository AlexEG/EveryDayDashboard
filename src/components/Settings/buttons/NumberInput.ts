import HTML from "../../HTML/HTML";

export default function NumberInput(
  labelTitle: string,
  inputID: string,
  value: number,
  minMax: [number, number],
  callback: any,
) {
  const wrapper = HTML("div", "flex items-center px-2");

  const numberInput = HTML(
    "input",
    "bg-transparent text-indigo-100 border-indigo-500 border text-center text-sm",
    inputID,
    "",
    {
      type: "number",
      value: 5000,
      min: minMax[0],
      max: minMax[1],
    },
  );

  if (labelTitle) {
    const labelStyles = "text-indigo-300 pl-3 pr-2 first:pl-0";
    const label = HTML("label", labelStyles, "", labelTitle, { for: inputID });

    wrapper.append(label, numberInput);
  } else {
    wrapper.append(numberInput);
  }

  numberInput.onabort = () => {
    callback(numberInput);
  };

  return wrapper;
}
