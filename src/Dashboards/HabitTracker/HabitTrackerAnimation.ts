export function dailyProgressColumnAnimation(
  dayProgressBox: HTMLElement,
  additionalTime: number
) {
  dayProgressBox.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-50%)" },
      { transform: "translateX(-50%)" },
      { transform: "translateX(-50%)" },
      { transform: "translateX(-50%)" },
      { transform: "translateX(-50%)" },
      { transform: "translateX(0)" },
      { transform: "translateX(0)" },
      { transform: "translateX(0)" },
      { transform: "translateX(0)" },
      { transform: "translateX(0)" },
    ],

    {
      delay: 5000 + additionalTime,
      duration: 20_000,
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
}
