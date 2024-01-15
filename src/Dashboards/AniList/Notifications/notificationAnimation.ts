export default function notificationAnimation(
  notificationCard: HTMLDivElement,
  notificationAnimationTime: number
) {
  const notificationsContainer = document.querySelector(
    "div#anilist-notifications-container"
  );

  const containerHight =
    +getComputedStyle(notificationsContainer).height.slice(0, -2) + 50 + "px";
  // console.log("containerHight: ", containerHight)

  // open/display
  notificationCard.animate(
    { transform: [`translateY(${containerHight})`, "translateY(0)"] },

    {
      delay: 0,
      duration: 600,
      iterations: 1,
      easing: "ease-in-out",
    }
  );
  notificationCard.animate(
    { transform: ["translateY(0)", `translateY(${containerHight})`] },

    {
      delay: notificationAnimationTime - 600,
      duration: 400,
      iterations: 1,
      fill: "forwards",
      easing: "ease-in-out",
    }
  );
}
