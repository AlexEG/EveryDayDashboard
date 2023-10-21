export default function HTML(
  tag: string,
  classList?: string,
  id?: string,
  text?: string
) {
  const element = document.createElement(tag);

  if (text) element.innerText = text;
  if (id) element.setAttribute("id", id);

  if (classList) {
    element.setAttribute("class", classList);
  }
  return element;
}
