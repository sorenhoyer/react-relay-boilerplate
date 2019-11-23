import { AuthenticationError } from 'apollo-server-express';
import { getPostById, getPosts } from '../datasources/MockAPI';
import { Context } from '../types';

export default {
  Query: {
    me: async (_: unknown, __: unknown, context: Context): Promise<unknown> => {
      // if (!context.me) return new AuthenticationError('Not authenticated!');

      return new Promise(resolve => setTimeout(() => resolve(context.me), 4000));
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    post: async (_: unknown, args: any, context: Context): Promise<unknown> => {
      // if (!context.me) return new AuthenticationError('Not authenticated!');

      const post = await getPostById(args.id /* , context.me.id */);
      return new Promise(resolve => setTimeout(() => resolve(post), 2000));
      // return getPostById(args.id, context.me.id);
    },
    posts: async (_: unknown, __: unknown, context: Context): Promise<unknown> => {
      // if (!context.me) return new AuthenticationError('Not authenticated!');

      const posts = await getPosts(/* context.me.id */);
      return new Promise(resolve => setTimeout(() => resolve(posts), 8000));
      // return getPosts(context.me.id);
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
