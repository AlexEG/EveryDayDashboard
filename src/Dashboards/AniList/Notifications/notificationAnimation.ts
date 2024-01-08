
export default function notificationAnimation(notificationCard: HTMLDivElement, animationEnterDurationTime: number, animationOutDurationTime: number, notificationTotalShowTime: number) {
  const notificationsContainer = document.querySelector("div#anilist-notifications-container")

  const containerHight = +getComputedStyle(notificationsContainer).height.slice(0, -2) + 50 + "px"
  // console.log("containerHight: ", containerHight)

  // open/display
  notificationCard.animate(
    { transform: [`translateY(${containerHight})`, "translateY(0)"] },



    {
      delay: 0,
      duration: animationEnterDurationTime,
      iterations: 1,
      easing: "ease-in-out",
    }
  );
  notificationCard.animate(
    { transform: ["translateY(0)", `translateY(${containerHight})`,] },


    {
      delay: notificationTotalShowTime - animationEnterDurationTime,
      duration: animationOutDurationTime,
      iterations: 1,
      fill: "forwards",
      easing: "ease-in-out",
    }
  );
}
