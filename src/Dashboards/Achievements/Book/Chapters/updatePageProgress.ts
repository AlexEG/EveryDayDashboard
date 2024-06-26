export default function updatePageProgress(saveBtn: HTMLElement): void {
  // TODO Make it O(1)
  const cardContainer =
    saveBtn.parentElement.parentElement.parentElement.parentElement;

  // console.log("cardContainer", cardContainer);
  const fileNameJSON = cardContainer.dataset.fileName;

  // console.log("fileNameJSON", fileNameJSON);

  const input = saveBtn.parentElement.previousElementSibling
    .firstElementChild as HTMLInputElement;
  const newProgressValue = +input.value;
  // console.log("newProgressValue", newProgressValue);

  const cardTitle = cardContainer.firstElementChild.firstElementChild
    .firstElementChild as HTMLParagraphElement;

  // console.log("cardTitle: ", cardTitle.innerText);

  const subCardTitle = saveBtn.parentElement.parentElement
    .firstElementChild as HTMLParagraphElement;

  // console.log("subCardTitle: ", subCardTitle.innerText);

  const inputMin = +input.getAttribute("min");
  const inputMax = +input.getAttribute("max");
  // console.log("inputMin", inputMin);
  // console.log("inputMax", inputMax);

  if (newProgressValue >= inputMin && newProgressValue <= inputMax) {
    // Value is between [inputMin - inputMax] (OK)

    // --------------------- //

    const achievementsDataJSON = new Promise((res, rej) => {
      res(
        JSON.parse(
          window.DATA.getJSONFileData(
            `dashboards/achievements/${fileNameJSON}`,
          ),
        ),
      );
    });

    achievementsDataJSON.then((data) => {
      // console.log("data", data);

      const fileData = data.data.data;
      const metadata = data.data.metadata;

      // console.log("fileData", fileData);
      // console.log("metadata", metadata);

      // data item (SubCard/Chapter)
      const cardData = fileData[subCardTitle.innerText];
      // console.log("cardData", cardData);

      const ChapterPages = cardData.pages;
      const oldProgressPages = cardData.progressPages;
      cardData.progressPages = newProgressValue;
      cardData.progressPercentage = Math.round(
        (newProgressValue / ChapterPages) * 100,
      );

      // metadata
      const pages = metadata.pages;
      const newProgressPages =
        metadata.progressPages - oldProgressPages + newProgressValue;

      const newProgressPercentage = Math.round(
        (newProgressPages / pages) * 100,
      );
      metadata.progressPagesPercentage = newProgressPercentage;
      metadata.progressPages = newProgressPages;

      // console.log(cardData.progressPercentage, cardData.isComplete);
      // progressChapter
      const chapters = metadata.chapters; // 17

      if (
        cardData.progressPercentage === 100 &&
        cardData.isComplete === false
      ) {
        metadata.progressChapter = metadata.progressChapter + 1;
        metadata.progressChapterPercentage = Math.round(
          (metadata.progressChapter / chapters) * 100,
        );
        cardData.isComplete = true;
      }

      if (cardData.progressPercentage < 100 && cardData.isComplete === true) {
        metadata.progressChapter = metadata.progressChapter - 1;
        metadata.progressChapterPercentage = Math.round(
          (metadata.progressChapter / chapters) * 100,
        );
        cardData.isComplete = false;
      }

      // metadata isComplete
      if (
        metadata.progressChapter === chapters &&
        metadata.isComplete === false
      )
        metadata.isComplete = true;

      // console.log("New Data", data);

      window.DATA.CreateOrUpdateJSON(
        `dashboards/achievements/${fileNameJSON}.json`,
        data,
      );

      // change progressBar in realTime
      const progressBarContainer =
        saveBtn.parentElement.previousElementSibling.previousElementSibling;
      const progressBar = progressBarContainer.firstElementChild
        .firstElementChild as HTMLDivElement;

      const progressBox = progressBarContainer.lastElementChild
        .lastElementChild as HTMLDivElement;
      const span1 = progressBox.firstElementChild as HTMLSpanElement;
      const span2 = progressBox.lastElementChild as HTMLSpanElement;

      // console.log("progressBox", progressBox);
      // console.log("span1", span1);
      // console.log("span2", span2);

      progressBar.style.width = `${cardData.progressPercentage}%`;
      if (cardData.progressPercentage === 100)
        progressBar.innerText = "Complete";
      else progressBar.innerText = "";

      span1.innerText = `${cardData.progressPages}/${ChapterPages}`;
      span2.innerText = `${cardData.progressPercentage}%`;
      progressBox.classList.remove(
        "text-red-500",
        "text-yellow-500",
        "text-green-500",
      );
      const progressStyles =
        cardData.progressPercentage <= 25
          ? "text-red-500"
          : cardData.progressPercentage <= 75
            ? "text-yellow-500"
            : "text-green-500";
      progressBox.classList.add(progressStyles);
      // console.log("progressBarContainer", progressBarContainer);

      // TODO meatadata isComplete true => false if undo progress

      const containerProgressBars =
        cardContainer.firstElementChild.firstElementChild.nextElementSibling;

      const pagesProgessBar = containerProgressBars.firstElementChild
        .firstElementChild.firstElementChild as HTMLDivElement;
      const pagesProgessBox = containerProgressBars.firstElementChild
        .lastElementChild.firstElementChild as HTMLDivElement;
      const pagesSpan1 = pagesProgessBox.firstElementChild as HTMLSpanElement;
      const pagesSpan2 = pagesProgessBox.lastElementChild as HTMLSpanElement;

      pagesProgessBar.style.width = `${metadata.progressPagesPercentage}%`;
      pagesSpan1.innerText = `${metadata.progressPages}/${pages}`;
      pagesSpan2.innerText = `${metadata.progressPagesPercentage}%`;

      pagesProgessBox.classList.remove(
        "text-red-500",
        "text-yellow-500",
        "text-green-500",
      );
      const progressPageStyles =
        metadata.progressPagesPercentage <= 25
          ? "text-red-500"
          : metadata.progressPagesPercentage <= 75
            ? "text-yellow-500"
            : "text-green-500";
      pagesProgessBox.classList.add(progressPageStyles);

      const chaptersProgessBar = containerProgressBars.lastElementChild
        .firstElementChild.firstElementChild as HTMLDivElement;
      const chaptersProgessBox = containerProgressBars.lastElementChild
        .lastElementChild.firstElementChild as HTMLDivElement;
      const chaptersSpan1 =
        chaptersProgessBox.firstElementChild as HTMLSpanElement;
      const chaptersSpan2 =
        chaptersProgessBox.lastElementChild as HTMLSpanElement;

      chaptersProgessBar.style.width = `${metadata.progressChapterPercentage}%`;
      chaptersSpan1.innerText = `${metadata.progressPages}/${chapters}`;
      chaptersSpan2.innerText = `${metadata.progressChapterPercentage}%`;

      chaptersProgessBox.classList.remove(
        "text-red-500",
        "text-yellow-500",
        "text-green-500",
      );
      const progressChaptersStyles =
        metadata.progressChapterPercentage <= 25
          ? "text-red-500"
          : metadata.progressChapterPercentage <= 75
            ? "text-yellow-500"
            : "text-green-500";
      chaptersProgessBox.classList.add(progressChaptersStyles);

      console.log("containerProgressBars: ", containerProgressBars);

      console.log("pagesProgessBar: ", pagesProgessBar);
      console.log("pagesProgessBox: ", pagesProgessBox);
      console.log("pagesSpan1: ", pagesSpan1);
      console.log("pagesSpan2: ", pagesSpan2);

      console.log("chaptersProgessBar: ", chaptersProgessBar);
      console.log("chaptersProgessBox: ", chaptersProgessBox);
      console.log("chaptersSpan1: ", chaptersSpan1);
      console.log("chaptersSpan2: ", chaptersSpan2);
    });
    // --------------------- //
  } else {
    console.error(`Value must be between [ ${inputMin} - ${inputMax} ]`);
    input.value = "0";
  }
  saveBtn.parentElement.classList.add("hidden");
}
