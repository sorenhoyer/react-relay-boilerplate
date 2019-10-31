import { ApolloServer } from 'apollo-server-express';
// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';
import { Context, User } from './types';

const typeDefs = mergeTypes(fileLoader(`${__dirname}/schema/**/*.graphql`), { all: true });
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const server = new ApolloServer({
  context: ({ req }): Context => {
    const me: User = {
      id: '38447ec4-ce18-401f-ab24-baf7192e005e',
      firstName: 'John',
      lastName: 'Doe',
    };

    const ctx = {
      me,
      loaders: {},
      req,
    };

    return ctx;
  },
  playground: process.env.NODE_ENV === 'development',
  resolvers,
  tracing: true,
  typeDefs,
});

const app = express();

server.applyMiddleware({
  app,
  cors: {
    credentials: true,
    origin: process.env.GRAPHQL_ORIGIN,
  },
});

app.listen(process.env.GRAPHQL_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Running a GraphQL API server at ${process.env.GRAPHQL_HOST}${
      process.env.GRAPHQL_PORT ? `:${process.env.GRAPHQL_PORT}` : ''
    }/graphql`,
  );
});
