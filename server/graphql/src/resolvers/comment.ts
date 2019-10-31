import { Context } from '../types';

export default {
  Comment: {
    user: async (_: unknown, __: unknown, context: Context): Promise<unknown> => {
      return context.me;
    },
  },
};
