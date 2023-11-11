import HTML from "../../HTML/HTML";

export default function TextInput(
  name: string,
  placeholder: string,
  label: string,
  maxlength: string,
  value: string
) {
  const inputStyles =
    "bg-transparent border-indigo-600 border-2 rounded-md py-px px-1 focus-within:outline-none placeholder:opacity-30 focus-within:border-indigo-400 transition-colors text-indigo-50 duration-300 w-16 text-center text-base";
  const labelStyles = "text-indigo-300 pl-3 pr-1 first:pl-0";

  const input = HTML("input", inputStyles, name, "", {
    type: "text",
    maxlength: maxlength,
    placeholder: placeholder,
    name: name,
    value: value,
  }) as HTMLInputElement;

  input.onchange = () => {
    input.setAttribute("value", input.value);
  };

  const inputLabel = HTML("label", labelStyles, "", label, { for: name });

  const wrapper = HTML("div");
  wrapper.append(inputLabel, input);
  return wrapper;
}
