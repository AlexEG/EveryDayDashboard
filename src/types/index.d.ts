export {};

declare global {
  interface Window {
    DATA: {
      getFilesTitles(): Array<string>;
      getHabitTrackerFileNames(): Array<string>;
      readDir(path: string): Array<string>;
      getAchievementsFileNames(): Array<string>;
      createJSONHaFileHabit: (FileName: string) => void;
      getJSONFileData: (filePath: string) => string;
      editCalenderFileJSON: (
        fileName: string,
        month: string,
        day: string,
        time: string[],
      ) => void;
      deleteJSONFile: (filePath: string) => void;
      renameJSONFile: (oldFilePaht: string, newFilePaht: string) => void;
      editSettingsJSONFile_ON_OFF: (
        path: string,
        key: string,
        key2?: string,
        key3?: string,
      ) => void;
      editSettingsJSONFile_Value: (
        path: string,
        key: string,
        value: any,
        key2?: string,
        key3?: string,
      ) => void;
      downloadImg: (
        imgURL: string,
        imgFileName: string,
        pathToSave: string,
        logMessage: string,
      ) => void;
      CreateOrUpdateJSON: (filePath: string, data: any) => void;
    };
  }
}
