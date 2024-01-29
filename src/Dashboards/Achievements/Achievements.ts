import HTML from "../../components/HTML/HTML";
import AchievementsDATA from "./AchievementsDATA";
import Book from "./Book/Book";
// import Course from "./Course/Course";
import Header from "./Header/Header";

export default function Achievements() {
  const styles =
    "h-[calc(100vh-31px)] w-[100%-3.5rem] ml-14 bg-black border-t border-l border-neutral-400 p-4 overflow-y-auto";

  const MainContainer = HTML("main", styles, "achievements");
  const h1 = HTML(
    "h1",
    "text-center text-neutral-50 font-bold",
    "",
    "Achievements",
  );

  MainContainer.append(h1, Header());

  AchievementsDATA().then((data) => {
    // console.log("AchievementsDATA", data);

    for (const [fileNameJSON, achievement] of Object.entries(data)) {
      const data = achievement.data;
      const metadata = achievement.metadata;

      const name = metadata.name;
      const description = metadata.description;
      const type = metadata.type;
      // const isComplete = metadata.isComplete;

      if (type === "book") {
        const chapters = metadata.chapters;
        const pages = metadata.pages;
        const progressChapter = metadata.progressChapter;
        const progressPages = metadata.progressPages;
        const progressChapterPercentage = metadata.progressChapterPercentage;
        const progressPagesPercentage = metadata.progressPagesPercentage;

        MainContainer.append(
          Book(
            fileNameJSON,
            name,
            description,
            chapters,
            pages,
            progressChapter,
            progressPages,
            progressChapterPercentage,
            progressPagesPercentage,
            data,
          ),
        );
      }
      // if (type === "course") {
      //   const lessons = metadata.lessons;
      //   const progressLessons = metadata.progressLessons;
      //   const progressLessonsPercentage = metadata.progressLessonsPercentage;

      //   MainContainer.append(
      //     Course(
      //       fileNameJSON,
      //       name,
      //       description,
      //       isComplete,
      //       lessons,
      //       progressLessons,
      //       progressLessonsPercentage,
      //       data
      //     )
      //   );
      // }
    }
  });

  return MainContainer;
}
