import { buildSchema } from 'graphql';

export default buildSchema(`
  type Query {
    hello: String
    user(id: ID): User
    users(limit: Int, offset: Int): [User]
  }
  type Mutation {
    createUser(name: String, email: String, phone: String, locale: String, avatar: String, country: String, status: String): User
  }
  type User {
    id: ID!
    name: String
    email: String
    phone: String
    emailVerified: Int
    phoneVerified: Int
    locale: String
    avatar: String!
    country: String
    status: String
    createdAt: String!
    updatedAt: String
  }
`);