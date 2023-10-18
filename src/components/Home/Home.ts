import HTML from "../HTML/HTML";

export default function Home() {
  const homeContainer = HTML(
    "div",
    "bg-green-500 h-[calc(100%-31px)] w-[100%-3.5rem] ml-16 mb-16"
  );
  return homeContainer;
}
