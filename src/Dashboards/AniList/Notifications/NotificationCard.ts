import HTML from "../../../components/HTML/HTML";
import { notificationSettingsTypes } from "../type";
import notificationAnimation from "./notificationAnimation";

export default function NotificationCard(
  message: string,
  notificationSettings: notificationSettingsTypes,
) {
  const styles =
    "bg-neutral-950 w-full p-2 grid place-content-center rounded-lg first-of-type:mb-2";
  const notificationCard = HTML("div", styles) as HTMLDivElement;

  const span = HTML("span", "", "", message);

  notificationCard.append(span);

  if (notificationSettings.isEnabled)
    notificationAnimation(
      notificationCard,
      notificationSettings.notificationAnimationTime,
    );

  setTimeout(
    () => notificationCard.remove(),
    notificationSettings.notificationAnimationTime,
  );
  return notificationCard;
}
