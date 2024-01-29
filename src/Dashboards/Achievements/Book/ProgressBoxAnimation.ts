export function ProgressBoxAnimation(
  dayProgressBox: HTMLElement,
  additionalTime: number,
) {
  dayProgressBox.animate(
    [
      { transform: "translateY(0)" },
      { transform: "translateY(-50%)" },
      { transform: "translateY(-50%)" },
      { transform: "translateY(-50%)" },
      { transform: "translateY(-50%)" },
      { transform: "translateY(-50%)" },
      { transform: "translateY(0)" },
      { transform: "translateY(0)" },
      { transform: "translateY(0)" },
      { transform: "translateY(0)" },
      { transform: "translateY(0)" },
    ],

    {
      delay: 5000 + additionalTime,
      duration: 20_000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  );
}
