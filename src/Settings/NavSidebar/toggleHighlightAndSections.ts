

export default function toggleHighlightAndSections(sectionName: string, btn: HTMLElement, sectionHTML: HTMLElement) {
  if (
    !(
      document.querySelector("#settings > section").getAttribute("id") ==
      `settings--${sectionName.toLocaleLowerCase()}`
    )
  ) {
    // 1. remove settings section
    btn.parentElement.parentElement.lastElementChild.remove();
    // 2. append the new section
    btn.parentElement.parentElement.append(sectionHTML);

    // 3. remove highlight from all NavBtn
    btn.parentElement.querySelectorAll("button").forEach((btn) => {
      if (btn.classList.contains("bg-neutral-600")) {
        btn.classList.remove("bg-neutral-600");
      }
    });

    // 4. add highlight
    btn.classList.add("bg-neutral-600");

    console.log(
      ` %c Settings %c OPEN  ${sectionName} `,
      "background:black; color:#fff;font-weight: 700;",
      "background:black; color:#0f0;font-weight: 700;"
    );
  }
}
