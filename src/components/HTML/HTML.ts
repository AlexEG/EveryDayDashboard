export default function HTML(
  tag: string,
  classList?: string,
  id?: string,
  text?: string,
  setAttributes?: any,
) {
  const element = document.createElement(tag);

  if (text) element.innerText = text;
  if (id) element.setAttribute("id", id);

  if (classList) {
    element.setAttribute("class", classList);
  }

  if (setAttributes) {
    for (const key in setAttributes) {
      element.setAttribute(key, setAttributes[key]);
    }
  }

  // console.count("HTML");
  return element;
}
