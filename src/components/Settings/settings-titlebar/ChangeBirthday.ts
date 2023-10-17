import HTML from "../../HTML/HTML";

export default function ChangeBirthday() {
  const inputStyles =
    "bg-transparent border-indigo-600 border-2 rounded-md py-px px-1 focus-within:outline-none placeholder:opacity-30 focus-within:border-indigo-400 transition-colors text-indigo-50 duration-300 w-16 text-center text-base";

  const labelStyles = "text-indigo-300 pl-3 pr-1 first:pl-0";
  const container = HTML(
    "fieldset",
    "flex m-2 p-2 border-2 border-indigo-950 justify-between"
  );

  const inputYear = HTML("input", inputStyles, "birthday-input-year");
  inputYear.setAttribute("type", "text");
  inputYear.setAttribute("maxlength", "4");
  inputYear.setAttribute("placeholder", "YYYY");
  inputYear.setAttribute("name", "birthday-input-year");
  const labelYear = HTML("label", labelStyles, "", "Year");
  labelYear.setAttribute("for", "birthday-input-year");

  const inputMonth = HTML("input", inputStyles, "birthday-input-month");
  inputMonth.setAttribute("type", "text");
  inputMonth.setAttribute("maxlength", "2");
  inputMonth.setAttribute("placeholder", "MM");
  inputMonth.setAttribute("name", "birthday-input-month");
  const labelMonth = HTML("label", labelStyles, "", "Month");
  labelMonth.setAttribute("for", "birthday-input-month");

  const inputDay = HTML("input", inputStyles, "birthday-input-day");
  inputDay.setAttribute("type", "text");
  inputDay.setAttribute("maxlength", "2");
  inputDay.setAttribute("placeholder", "DD");
  inputDay.setAttribute("name", "birthday-input-day");
  const labelDay = HTML("label", labelStyles, "", "Day");
  labelDay.setAttribute("for", "birthday-input-day");

  const inputsWrapper = HTML("div");
  inputsWrapper.append(
    labelYear,
    inputYear,
    labelMonth,
    inputMonth,
    labelDay,
    inputDay
  );

  const legend = HTML(
    "legend",
    "text-indigo-200 text-sm",
    "",
    "Change Birthday"
  );

  const saveBtn = HTML(
    "button",
    "text-indigo-100 text-center font-semibold px-3 py-px border-2 rounded-md border-indigo-600 hover:text-indigo-600 transition-colors duration-300 hover:border-indigo-100 hover:bg-indigo-100 active:opacity-90 bg-slate-950",
    "birthday-save-inputs-btn",
    "SAVE"
  );
  container.append(legend, inputsWrapper, saveBtn);
  return container;
}
