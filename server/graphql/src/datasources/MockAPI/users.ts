import { users } from './data';
import { RawUser } from '../../types';

// eslint-disable-next-line import/prefer-default-export
export const getUser = async (id: string): Promise<RawUser | undefined> => {
  try {
    return users.find((item: RawUser) => item.id === id);
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }
};
