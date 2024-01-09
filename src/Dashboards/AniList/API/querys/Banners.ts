export default `query ($userId: Int, $userName: String, $type: MediaType) {
  MediaListCollection(userId: $userId, userName: $userName, type: $type) {
    lists {
      entries {
        ...mediaListEntry
      }
    }
  }
}
fragment mediaListEntry on MediaList {
  media {
    title {
      userPreferred
      english
    }
    bannerImage
  }
}`