export default `query ($id: Int, $name: String) {
  User(id: $id, name: $name) {
    favourites {
      anime {
        edges {
          node {
            id
          }
        }
      }
    }
  }
}`;
