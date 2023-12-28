export default function updatePageProgress(saveBtn: HTMLElement): void {
  // TODO Make it O(1)
  const cardContainer =
    saveBtn.parentElement.parentElement.parentElement.parentElement;

  console.log("cardContainer", cardContainer);
  const fileNameJSON = cardContainer.dataset.fileName;

  console.log("fileNameJSON", fileNameJSON);

  const input = saveBtn.parentElement.previousElementSibling
    .firstElementChild as HTMLInputElement;
  const newProgressValue = +input.value;
  console.log("newProgressValue", newProgressValue);

  const cardTitle = cardContainer.firstElementChild.firstElementChild
    .firstElementChild as HTMLParagraphElement;

  console.log("cardTitle: ", cardTitle.innerText);

  const subCardTitle = saveBtn.parentElement.parentElement
    .firstElementChild as HTMLParagraphElement;

  console.log("subCardTitle: ", subCardTitle.innerText);

  const inputMin = +input.getAttribute("min");
  const inputMax = +input.getAttribute("max");
  console.log("inputMin", inputMin);
  console.log("inputMax", inputMax);

  if (newProgressValue >= inputMin && newProgressValue <= inputMax) {
    // Value is between [inputMin - inputMax] (OK)

    // --------------------- //

    const achievementsDataJSON = new Promise((res, rej) => {
      res(
        JSON.parse(
          window.DATA.getJSONFileData(`dashboards/achievements/${fileNameJSON}`)
        )
      );
    });

    achievementsDataJSON.then((data) => {
      // console.log("data", data);

      const fileData = data.data.data;
      const metadata = data.data.metadata;

      console.log("fileData", fileData);
      console.log("metadata", metadata);

      // data item (SubCard/Chapter)
      const cardData = fileData[subCardTitle.innerText];
      console.log("cardData", cardData);

      const ChapterPages = cardData.pages;
      const oldProgressPages = cardData.progressPages;
      cardData.progressPages = newProgressValue;
      cardData.progressPercentage = Math.round(
        (newProgressValue / ChapterPages) * 100
      );

      // metadata
      const pages = metadata.pages;
      const newProgressPages =
        metadata.progressPages - oldProgressPages + newProgressValue;

      const newProgressPercentage = Math.round(
        (newProgressPages / pages) * 100
      );
      metadata.progressPagesPercentage = newProgressPercentage;
      metadata.progressPages = newProgressPages;

      console.log(cardData.progressPercentage, cardData.isComplete);
      // progressChapter
      const chapters = metadata.chapters; // 17

      if (
        cardData.progressPercentage === 100 &&
        cardData.isComplete === false
      ) {
        metadata.progressChapter = metadata.progressChapter + 1;
        metadata.progressChapterPercentage = Math.round(
          (metadata.progressChapter / chapters) * 100
        );
        cardData.isComplete = true;
      }

      if (cardData.progressPercentage < 100 && cardData.isComplete === true) {
        metadata.progressChapter = metadata.progressChapter - 1;
        metadata.progressChapterPercentage = Math.round(
          (metadata.progressChapter / chapters) * 100
        );
        cardData.isComplete = false;
      }

      // metadata isComplete
      if (
        metadata.progressChapter === chapters &&
        metadata.isComplete === false
      )
        metadata.isComplete = true;

      console.log("New Data", data);

      window.DATA.CreateOrUpdateJSON(
        `dashboards/achievements/${fileNameJSON}.json`,
        data
      );
    });
    // --------------------- //
  } else {
    console.error(`Value must be between [ ${inputMin} - ${inputMax} ]`);
    input.value = "0";
  }
  saveBtn.parentElement.classList.add("hidden");
}
