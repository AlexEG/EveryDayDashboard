import HTML from "../HTML/HTML";

export default function SettingsFieldset(title: string, id: string) {
  const styles =
    "flex flex-wrap m-2 px-2 py-3 border-2 border-indigo-950 justify-between";
  const container = HTML("fieldset", styles, id);

  const legend = HTML("legend", "text-indigo-200 text-sm", "", title);
  container.append(legend);
  return container;
}
