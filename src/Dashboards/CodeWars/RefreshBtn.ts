import HTML from "../../components/HTML/HTML";
import codewarsAPI_update from "./codewarsAPI_update";

export default function RefreshBtn() {
  const styles =
    "text-indigo-100 text-center font-medium px-3 py-px border-2 rounded-md border-indigo-600 hover:text-indigo-600 transition-colors duration-300 hover:border-indigo-100 hover:bg-indigo-100 active:opacity-90";

  const refreshBtn = HTML("button", styles, "", "Update JSON");

  refreshBtn.onclick = () => {
    codewarsAPI_update();
  };

  return refreshBtn;
}
