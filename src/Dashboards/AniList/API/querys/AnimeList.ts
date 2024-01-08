export default `query ($userId: Int, $userName: String, $type: MediaType) {
  MediaListCollection(userId: $userId, userName: $userName, type: $type) {
    lists {
      name
      entries {
        ...mediaListEntry
      }
    }
  }
}
fragment mediaListEntry on MediaList {
  status
  score
  progress
  updatedAt
  startedAt {
    year
    month
    day
  }
  completedAt {
    year
    month
    day
  }
  media {
    title {
      userPreferred
      english
    }
    coverImage {
      extraLarge
      large
    }
    format
    episodes
    averageScore
    popularity
    genres
    bannerImage
    startDate {
      year
      month
      day
    }
  }
}`