import { AuthenticationError } from 'apollo-server-express';
import { connectionFromArray, ConnectionArguments } from 'graphql-relay';
import { getArticleBySlug, getArticles } from '../datasources/MockAPI';
import { Context } from '../types';

export default {
  Query: {
    me: async (_: unknown, __: unknown, context: Context): Promise<unknown> => {
      // if (!context.me) return new AuthenticationError('Not authenticated!');

      return new Promise(resolve => setTimeout(() => resolve(context.me), 4000));
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    article: async (_: unknown, args: any, context: Context): Promise<unknown> => {
      // if (!context.me) return new AuthenticationError('Not authenticated!');

      const article = await getArticleBySlug(args.slug /* , context.me.id */);
      return new Promise(resolve => setTimeout(() => resolve(article), 2000));
      // return getArticleById(args.id, context.me.id);
    },
    articles: async (_: unknown, args: ConnectionArguments, context: Context): Promise<unknown> => {
      // if (!context.me) return new AuthenticationError('Not authenticated!');

      const articles = await getArticles(/* context.me.id */);
      // return new Promise(resolve => setTimeout(() => resolve(articles), 8000));
      // return getArticles(context.me.id);
      return connectionFromArray(articles as unknown[], args);
    },
  },
  /** https://github.com/apollographql/apollo-server/issues/1075#issuecomment-427476421 */
  Node: {
    /* eslint-disable no-underscore-dangle */
    /* eslint-disable @typescript-eslint/explicit-function-return-type */
    __resolveType() {
      return null;
    },
  },
};
