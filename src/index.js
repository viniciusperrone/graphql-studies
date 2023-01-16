import { ApolloServer, gql } from 'apollo-server';

const TYPE_DEFS = gql`
  type Query {
    hello: String
    hi: String
  }
`;

const server = new ApolloServer({
  typeDefs: TYPE_DEFS,
  resolvers: {
    Query: {
      hello: () => {
        return `Hello again`;
      },
      hi: () => {
        return `Hi`;
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
