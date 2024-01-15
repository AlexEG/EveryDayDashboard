export default `
query ($userId: Int, $userName: String, $type: MediaType) {
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
  mediaId
  status
  score
  repeat
  progress
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
    id
    title {
      userPreferred
      english
    }
    coverImage {
      extraLarge
      large
    }
    format
    status(version: 2)
    volumes
    averageScore
    popularity
    meanScore
    favourites
    genres
    source
    chapters
    bannerImage
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    rankings {
      rank
      context
    }
  }
}
`;
