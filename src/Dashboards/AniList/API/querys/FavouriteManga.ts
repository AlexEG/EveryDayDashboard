export default `query ($id: Int, $name: String) {
  User(id: $id, name: $name) {
    favourites {
      manga {
        edges {
          node {
            id
          }
        }
      }
    }
  }
}
`