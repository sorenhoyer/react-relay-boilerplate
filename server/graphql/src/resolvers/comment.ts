import { getUser } from '../datasources/MockAPI';
import { Context } from '../types';
import { Comment } from './types';

export default {
  Comment: {
    user: async (parent: Comment, __: unknown, context: Context): Promise<unknown> => {
      return getUser(parent.userId);
    },
  },
};
