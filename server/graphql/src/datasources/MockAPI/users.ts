import { users } from './data';
import { User } from './types';

// eslint-disable-next-line import/prefer-default-export
export const getUser = async (id: string): Promise<User | undefined> => {
  try {
    return users.find((item: User) => item.id === id);
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }
};
