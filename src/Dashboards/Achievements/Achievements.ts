import HTML from "../../components/HTML/HTML";
import AchievementsDATA from "./AchievementsDATA";
import Card from "./Card/Card";
import Header from "./Header/Header";

export default function Achievements() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-black border-t border-l border-neutral-400 p-4 overflow-y-auto";

  const MainContainer = HTML("main", styles, "achievements");
  const h1 = HTML(
    "h1",
    "text-center text-neutral-50 font-bold",
    "",
    "Achievements"
  );

  MainContainer.append(h1, Header());

  AchievementsDATA().then((data) => {
    console.log("AchievementsDATA", data);

    for (const [, achievement] of Object.entries(data)) {
      const data = achievement.data;
      const metadata = achievement.metadata;

      const name = metadata.name;
      const description = metadata.description;
      const isBook = metadata.isBook;
      const chapters = metadata.chapters;
      const pages = metadata.pages;
      const progressChapter = metadata.progressChapter;
      const progressPages = metadata.progressPages;
      const progressChapterPercentage = metadata.progressChapterPercentage;
      const progressPagesPercentage = metadata.progressPagesPercentage;
      const isComplete = metadata.isComplete;

      console.log(chapters);
      MainContainer.append(
        Card(
          name,
          description,
          chapters,
          isBook,
          pages,
          progressChapter,
          progressPages,
          progressChapterPercentage,
          progressPagesPercentage,
          isComplete,
          data
        )
      );
    }
  });

  return MainContainer;
}
