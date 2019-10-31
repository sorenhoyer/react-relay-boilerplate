import { getComments } from '../datasources/MockAPI';
import { Context } from '../types';
import { Post } from './types';

export default {
  Post: {
    comments: async (parent: Post): Promise<unknown> => {
      return getComments(parent.id);
    },
    user: async (_: Post, __: unknown, context: Context): Promise<unknown> => {
      return context.me;
    },
  },
};
