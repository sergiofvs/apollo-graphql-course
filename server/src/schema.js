const gql = require('graphql-tag');
const typeDefs = gql`
  # Schema definitions go here

  "Query to get tracks array for the homepage grid"
  type Query {
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "Track's title"
    title: String!
    "Track's author"
    author: Author
    "Track's thumbnail"
    thumbnail: String
    "Track's length to complete, in minutes"
    length: Int
    "Number of modules the track contains"
    modulesCount: Int
  }

  "Author of a Track"
  type Author {
    id: ID!
    "Author's name"
    name: String!
    "Author's picture"
    photo: String
  }
`;

module.exports = typeDefs;
