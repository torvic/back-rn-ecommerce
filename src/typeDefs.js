const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Address {
    _id: ID!
    country: String!
    fullName: String!
    phoneNumber: String!
    address: String!
    city: String!
    createdAt: String
    updatedAt: String
  }

  type Order {
    _id: ID!
    address: ID!
    complete: Boolean!
    transactionId: Float
    user: ID!
  }

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

  type OrderItem {
    _id: ID!
    quantity: Int!
    option: String
    product: Product!
    order: Order!
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
    "Get all products"
    allProducts: [Product]
    "Get all order items not complete"
    getAllOrderItemNotComplete: [OrderItem]
    "Get product by id"
    getProductById(id: ID!): Product!
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

  input ProductInput {
    title: String!
    description: String!
    image: String!
    images: [String!]!
    options: [String!]
    avgRating: Float!
    ratings: Float
    price: Float!
    oldPrice: Float
  }

  input UpdateProductInput {
    id: ID!
    title: String
    description: String
    image: String
    images: [String]
    options: [String]
    avgRating: Float
    ratings: Float
    price: Float
    oldPrice: Float
  }

  input OrderItemInput {
    quantity: Int!
    option: String
    product: ID!
  }

  input UpdateOrderItemInput {
    quantity: Int!
    option: String
  }

  input AddressInput {
    country: String!
    fullName: String!
    phoneNumber: String!
    address: String!
    city: String!
  }

  type LoginPayload {
    user: User
    token: String!
  }

  type DeleteProductPayload {
    product: Product
    message: String!
  }

  type DeleteOrderItemPayload {
    orderItem: OrderItem
    message: String!
  }

  type OrderItemPayload {
    _id: ID!
    quantity: Int!
    option: String
    product: Product!
    order: ID!
    createdAt: String
    updatedAt: String
  }

  type Mutation {
    "Create an User"
    createAccount(input: CreateUserInput!): User
    "Login an user"
    logInUser(input: LoginUserInput!): LoginPayload!
    "Create a product"
    addProduct(input: ProductInput!): Product
    "Update a product"
    updateProduct(input: UpdateProductInput!): Product
    "Delete a product"
    deleteProduct(id: ID!): DeleteProductPayload!
    "Create an order item"
    addNewOrderItem(input: OrderItemInput!): OrderItemPayload
    "Update order item"
    updateOrderItem(id: ID!, input: UpdateOrderItemInput!): OrderItemPayload
    "Delete order item"
    deleteOrderItem(id: ID!): DeleteOrderItemPayload
    "Create an address"
    addNewAddress(input: AddressInput!): Address!
  }
`;

module.exports = typeDefs;
