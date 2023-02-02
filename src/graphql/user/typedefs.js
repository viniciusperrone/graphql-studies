import { gql } from 'apollo-server-core';

export const postTypeDefs = gql`
  extend type Query {
    post: Post!
    posts: [Post!]!
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    indexRef: Int!
    createdAt: String!
  }
`;
