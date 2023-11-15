import HTML from "../../../components/HTML/HTML";
import SettingsFieldset from "../../../components/Settings/SettingsFieldset";
import TextInput from "../../../components/Settings/TextInput";
import SaveBtn from "../../../components/Settings/buttons/SaveBtn";
import TitleBarDATA from "./TitleBarDATA";

export default function ChangeBirthday() {
  const container = SettingsFieldset(
    "Change Birthday",
    "settings--titlebar--change-birthday"
  );

  const inputsWrapper = HTML("div", "flex gap-x-4");

  TitleBarDATA().then((data) => {
    const [y, m, d] = data["birthday"];
    inputsWrapper.append(
      TextInput("birthday-input-year", "YYYY", "Year", "4", y),
      TextInput("birthday-input-month", "MM", "Month", "2", m),
      TextInput("birthday-input-day", "DD", "Day", "2", d)
    );
  });

  const saveBtn = SaveBtn();

  saveBtn.onclick = () => {
    const inputs = saveBtn.parentElement.children[1].children;
    // console.log(inputs);
    // console.log(inputs[1].lastChild);

    const [y, m, d] = [
      inputs[0].lastChild as HTMLInputElement,
      inputs[1].lastChild as HTMLInputElement,
      inputs[2].lastChild as HTMLInputElement,
    ];
    const newBirthday = [+y.value, +m.value, +d.value];

    window.DATA.editSettingsJSONFile_Value(
      "settings/titlebar",
      "birthday",
      newBirthday
    );

    console.log(
      `%c Change Birthday => %c${newBirthday.join("-")} `,
      "background:black; color:white",
      "background:black; color:#0f0"
    );
  };
  container.append(inputsWrapper, saveBtn);
  return container;
}
