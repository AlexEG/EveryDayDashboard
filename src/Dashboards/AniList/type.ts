export type anilistSettingsDataTypes = {
  data: {
    defaultHomePage: string,
    filterIsOpenByDefault: boolean,
    notification: notificationSettingsTypes,
    pages: {
      anime: {
        isInfoHeaderEnabled: true
      }
    }
  }
}

export type notificationSettingsTypes = {
  isEnabled: boolean
  isAnimationsEnabled: boolean
  notificationTotalShowTime: number
  animationEnterDurationTime: number
  animationOutDurationTime: number
}