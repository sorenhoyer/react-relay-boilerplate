import { getUser } from '../datasources/MockAPI';
import { Context, RawComment } from '../types';

export default {
  Comment: {
    user: async (parent: RawComment, __: unknown, context: Context): Promise<unknown> => {
      return getUser(parent.userId);
    },
  },
};
