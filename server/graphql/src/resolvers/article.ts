import { getComments, getUser } from '../datasources/MockAPI';
import { Context, RawArticle } from '../types';

export default {
  Article: {
    comments: async (parent: RawArticle): Promise<unknown> => {
      return getComments(parent.id);
    },
    user: async (parent: RawArticle, __: unknown, ___: Context): Promise<unknown> => {
      return getUser(parent.userId);
    },
  },
};
