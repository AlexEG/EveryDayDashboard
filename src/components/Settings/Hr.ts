import HTML from "../HTML/HTML";

export default function Hr() {
  const styles = "opacity-50 absolute bottom-0 left-8 right-8";
  const hr = HTML("hr", styles);
  return hr;
}
