import { getComments, getUser } from '../datasources/MockAPI';
import { Context } from '../types';
import { Article } from './types';

export default {
  Article: {
    comments: async (parent: Article): Promise<unknown> => {
      return getComments(parent.id);
    },
    user: async (parent: Article, __: unknown, ___: Context): Promise<unknown> => {
      return getUser(parent.userId);
    },
  },
};
