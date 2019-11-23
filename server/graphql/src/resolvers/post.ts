import { getComments, getUser } from '../datasources/MockAPI';
import { Context } from '../types';
import { Post } from './types';

export default {
  Post: {
    comments: async (parent: Post): Promise<unknown> => {
      return getComments(parent.id);
    },
    user: async (parent: Post, __: unknown, ___: Context): Promise<unknown> => {
      return getUser(parent.userId);
    },
  },
};
