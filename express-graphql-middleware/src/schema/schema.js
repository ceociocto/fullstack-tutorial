const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    role: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    users(offset: Int = 0, limit: Int = 10): [User!]!
    user(id: ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload
  }
`); 