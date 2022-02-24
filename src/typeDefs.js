const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID!
    title: String!
    "Este es el autor del libro"
    description: String!
    image: String!
    images: [String!]!
    options: [String!]
    avgRating: Float!
    ratings: Float
    price: Float!
    oldPrice: Float
    createdAt: String
    updatedAt: String
  }

  type User {
    _id: ID!
    email: String!
    username: String!
    password: String!
    createdAt: String
    updatedAt: String
  }

  type Query {
    allProducts: [Product]
  }

  input CreateUserInput {
    email: String!
    password: String!
    username: String!
  }

  input LoginUserInput {
    email: String!
    password: String!
  }

  type LoginPayload {
    user: User
    token: String!
  }

  type Mutation {
    "Create an User"
    createAccount(input: CreateUserInput!): User
    "Login an user"
    logInUser(input: LoginUserInput!): LoginPayload!
  }
`;

module.exports = typeDefs;
